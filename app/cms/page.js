"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import {
  Settings,
  TestTube,
  Users,
  BarChart,
  Save,
  RefreshCw,
  Eye,
  EyeOff,
  Plus,
  Trash2,
} from "lucide-react"

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState("ab-testing")
  const [isPublicView, setIsPublicView] = useState(true)

  // A/B Testing State
  const [abTests, setAbTests] = useState([
    {
      id: 1,
      name: "Hero Section CTA",
      status: "active",
      variants: ["Original", "Variant A"],
      traffic: 50,
    },
    {
      id: 2,
      name: "Pricing Display",
      status: "draft",
      variants: ["Original", "Variant B"],
      traffic: 50,
    },
  ])

  // Personalization State
  const [personalizationRules, setPersonalizationRules] = useState([
    {
      id: 1,
      name: "First Time Visitors",
      condition: "visits = 1",
      action: "Show welcome popup",
      enabled: true,
    },
    {
      id: 2,
      name: "Returning Users",
      condition: "visits > 3",
      action: "Show loyalty discount",
      enabled: false,
    },
  ])

  const handleSave = () => {
    // TODO: Implement Firebase save
    console.log("Saving configurations...")
    alert("Configuration saved successfully!")
  }

  const handleAddTest = () => {
    const newTest = {
      id: Date.now(),
      name: "New Test",
      status: "draft",
      variants: ["Original", "Variant A"],
      traffic: 50,
    }
    setAbTests([...abTests, newTest])
  }

  const handleDeleteTest = (id) => {
    setAbTests(abTests.filter((test) => test.id !== id))
  }

  const handleAddRule = () => {
    const newRule = {
      id: Date.now(),
      name: "New Rule",
      condition: "",
      action: "",
      enabled: false,
    }
    setPersonalizationRules([...personalizationRules, newRule])
  }

  const handleDeleteRule = (id) => {
    setPersonalizationRules(personalizationRules.filter((rule) => rule.id !== id))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Settings size={40} />
              <h1 className="text-5xl font-bold">Content Management System</h1>
            </div>
            <p className="text-xl text-zinc-300 mb-6">
              Configure A/B testing experiments and personalization rules for your portfolio
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className={`w-3 h-3 rounded-full ${isPublicView ? "bg-green-400" : "bg-yellow-400"} animate-pulse`} />
                <span className="text-sm font-medium">
                  {isPublicView ? "Public Access Mode" : "Admin Mode"}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPublicView(!isPublicView)}
                className="text-white border-white/20 hover:bg-white/10">
                {isPublicView ? <EyeOff size={16} /> : <Eye size={16} />}
                {isPublicView ? "Switch to Admin" : "Switch to Public"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab("ab-testing")}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === "ab-testing"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              <TestTube size={20} />
              A/B Testing
            </button>
            <button
              onClick={() => setActiveTab("personalization")}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === "personalization"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              <Users size={20} />
              Personalization
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === "analytics"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              <BarChart size={20} />
              Analytics
            </button>
          </div>

          {/* A/B Testing Tab */}
          {activeTab === "ab-testing" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Active Experiments</h2>
                <Button onClick={handleAddTest} disabled={!isPublicView}>
                  <Plus size={20} />
                  New Test
                </Button>
              </div>

              <div className="grid gap-6">
                {abTests.map((test) => (
                  <div
                    key={test.id}
                    className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{test.name}</h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              test.status === "active"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            }`}>
                            {test.status}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {test.traffic}% traffic split
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteTest(test.id)}
                        disabled={!isPublicView}>
                        <Trash2 size={20} className="text-red-500" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {test.variants.map((variant, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white dark:bg-zinc-950 rounded-lg border">
                          <div className="font-medium mb-2">{variant}</div>
                          <div className="text-sm text-muted-foreground">
                            Conversion: --
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personalization Tab */}
          {activeTab === "personalization" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Personalization Rules</h2>
                <Button onClick={handleAddRule} disabled={!isPublicView}>
                  <Plus size={20} />
                  New Rule
                </Button>
              </div>

              <div className="grid gap-6">
                {personalizationRules.map((rule) => (
                  <div
                    key={rule.id}
                    className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{rule.name}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">
                              Condition:
                            </span>
                            <code className="px-2 py-1 bg-white dark:bg-zinc-950 rounded text-sm">
                              {rule.condition}
                            </code>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">
                              Action:
                            </span>
                            <span className="text-sm">{rule.action}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant={rule.enabled ? "default" : "outline"}
                          size="sm"
                          disabled={!isPublicView}>
                          {rule.enabled ? "Enabled" : "Disabled"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteRule(rule.id)}
                          disabled={!isPublicView}>
                          <Trash2 size={20} className="text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Analytics Overview</h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">Total Visits</div>
                  <div className="text-3xl font-bold">--</div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">Total Likes</div>
                  <div className="text-3xl font-bold">--</div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">Avg Rating</div>
                  <div className="text-3xl font-bold">--</div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">Active Tests</div>
                  <div className="text-3xl font-bold">{abTests.filter(t => t.status === 'active').length}</div>
                </div>
              </div>

              <div className="border rounded-xl p-8 text-center bg-zinc-50 dark:bg-zinc-900">
                <BarChart size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and reporting will be available once Firebase integration is complete.
                </p>
              </div>
            </div>
          )}

          {/* Action Bar */}
          <div className="sticky bottom-0 mt-12 py-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                {isPublicView ? "Public users can view but not edit" : "Changes will be saved to Firebase"}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" disabled={!isPublicView}>
                  <RefreshCw size={20} />
                  Reset
                </Button>
                <Button onClick={handleSave} disabled={!isPublicView}>
                  <Save size={20} />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
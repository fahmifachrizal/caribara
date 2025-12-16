// app/cms/CMSContent.jsx
"use client"

import { useState, useEffect } from "react"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Settings,
  TestTube,
  Users,
  BarChart,
  RefreshCw,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Edit,
  Check,
  X,
} from "lucide-react"

function CMSContent() {
  const [activeTab, setActiveTab] = useState("ab-testing")
  const [isPublicView, setIsPublicView] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Mock data for demonstration
  const [abTests, setAbTests] = useState([])
  const [editingTest, setEditingTest] = useState(null)
  const [personalizationRules, setPersonalizationRules] = useState([])
  const [editingRule, setEditingRule] = useState(null)
  const [stats, setStats] = useState({
    totalLikes: 0,
    totalRatings: 0,
    averageRating: 0,
    totalVisits: 0,
  })

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock data
      setAbTests([
        {
          id: "1",
          name: "Homepage Hero Test",
          status: "active",
          variants: ["Original", "Variant A"],
          traffic: 50,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])

      setPersonalizationRules([
        {
          id: "1",
          name: "First Visit Welcome",
          condition: "visits = 1",
          action: "Show welcome message",
          enabled: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])

      setStats({
        totalLikes: 125,
        totalRatings: 89,
        averageRating: 4.6,
        totalVisits: 1250,
      })

      setLoading(false)
    }

    loadData()
  }, [])

  const handleSaveTest = async (test) => {
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (test.id && abTests.find((t) => t.id === test.id)) {
      setAbTests(abTests.map((t) => (t.id === test.id ? test : t)))
    } else {
      setAbTests([...abTests, { ...test, id: Date.now().toString() }])
    }

    setEditingTest(null)
    setSaving(false)
  }

  const handleDeleteTest = async (id) => {
    if (!confirm("Are you sure you want to delete this test?")) return

    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setAbTests(abTests.filter((t) => t.id !== id))
    setSaving(false)
  }

  const handleAddTest = () => {
    const newTest = {
      id: Date.now().toString(),
      name: "New Test",
      status: "draft",
      variants: ["Original", "Variant A"],
      traffic: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setEditingTest(newTest)
  }

  const handleSaveRule = async (rule) => {
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (rule.id && personalizationRules.find((r) => r.id === rule.id)) {
      setPersonalizationRules(
        personalizationRules.map((r) => (r.id === rule.id ? rule : r))
      )
    } else {
      setPersonalizationRules([
        ...personalizationRules,
        { ...rule, id: Date.now().toString() },
      ])
    }

    setEditingRule(null)
    setSaving(false)
  }

  const handleDeleteRule = async (id) => {
    if (!confirm("Are you sure you want to delete this rule?")) return

    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setPersonalizationRules(personalizationRules.filter((r) => r.id !== id))
    setSaving(false)
  }

  const handleAddRule = () => {
    const newRule = {
      id: Date.now().toString(),
      name: "New Rule",
      condition: "visits > 1",
      action: "Show custom message",
      enabled: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setEditingRule(newRule)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading CMS data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-16 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Settings size={40} />
              <h1 className="text-5xl font-bold">Content Management System</h1>
            </div>
            <p className="text-xl text-zinc-300 mb-6">
              Configure A/B testing experiments and personalization rules for
              your portfolio
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isPublicView ? "bg-yellow-400" : "bg-green-400"
                  } animate-pulse`}
                />
                <span className="text-sm font-medium">
                  {isPublicView ? "Public View Mode" : "Admin Mode"}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPublicView(!isPublicView)}
                className="text-white border-white/20 hover:bg-white/10">
                {isPublicView ? <Eye size={16} /> : <EyeOff size={16} />}
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
                <Button
                  onClick={handleAddTest}
                  disabled={isPublicView || saving}>
                  <Plus size={20} />
                  New Test
                </Button>
              </div>

              {editingTest && (
                <TestEditor
                  test={editingTest}
                  onSave={handleSaveTest}
                  onCancel={() => setEditingTest(null)}
                  saving={saving}
                />
              )}

              <div className="grid gap-6">
                {abTests.map((test) => (
                  <div
                    key={test.id}
                    className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
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
                      {!isPublicView && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingTest(test)}
                            disabled={saving}>
                            <Edit size={20} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteTest(test.id)}
                            disabled={saving}>
                            <Trash2 size={20} className="text-red-500" />
                          </Button>
                        </div>
                      )}
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
                <Button
                  onClick={handleAddRule}
                  disabled={isPublicView || saving}>
                  <Plus size={20} />
                  New Rule
                </Button>
              </div>

              {editingRule && (
                <RuleEditor
                  rule={editingRule}
                  onSave={handleSaveRule}
                  onCancel={() => setEditingRule(null)}
                  saving={saving}
                />
              )}

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
                      {!isPublicView && (
                        <div className="flex items-center gap-2">
                          <Button
                            variant={rule.enabled ? "default" : "outline"}
                            size="sm"
                            onClick={() =>
                              handleSaveRule({
                                ...rule,
                                enabled: !rule.enabled,
                              })
                            }
                            disabled={saving}>
                            {rule.enabled ? "Enabled" : "Disabled"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingRule(rule)}
                            disabled={saving}>
                            <Edit size={20} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteRule(rule.id)}
                            disabled={saving}>
                            <Trash2 size={20} className="text-red-500" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Analytics Overview</h2>
                <Button variant="outline">
                  <RefreshCw size={20} />
                  Refresh
                </Button>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">
                    Total Visits
                  </div>
                  <div className="text-3xl font-bold">{stats.totalVisits}</div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">
                    Total Likes
                  </div>
                  <div className="text-3xl font-bold">{stats.totalLikes}</div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">
                    Avg Rating
                  </div>
                  <div className="text-3xl font-bold">
                    {stats.averageRating.toFixed(1)}
                  </div>
                </div>
                <div className="p-6 border rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <div className="text-sm text-muted-foreground mb-2">
                    Active Tests
                  </div>
                  <div className="text-3xl font-bold">
                    {abTests.filter((t) => t.status === "active").length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Test Editor Component
function TestEditor({ test, onSave, onCancel, saving }) {
  const [formData, setFormData] = useState(test)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="border rounded-xl p-6 bg-blue-50 dark:bg-blue-950/20">
      <h3 className="text-xl font-bold mb-4">
        {test.id ? "Edit Test" : "New Test"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Test Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg">
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Traffic Split (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.traffic}
            onChange={(e) =>
              setFormData({ ...formData, traffic: parseInt(e.target.value) })
            }
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>
            <Check size={20} />
            Save
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            <X size={20} />
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

// Rule Editor Component
function RuleEditor({ rule, onSave, onCancel, saving }) {
  const [formData, setFormData] = useState(rule)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="border rounded-xl p-6 bg-green-50 dark:bg-green-950/20">
      <h3 className="text-xl font-bold mb-4">
        {rule.id ? "Edit Rule" : "New Rule"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Rule Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Condition</label>
          <input
            type="text"
            value={formData.condition}
            onChange={(e) =>
              setFormData({ ...formData, condition: e.target.value })
            }
            placeholder="e.g., visits > 3"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            Examples: visits = 1, visits &gt; 3, visits &lt; 5
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Action</label>
          <input
            type="text"
            value={formData.action}
            onChange={(e) =>
              setFormData({ ...formData, action: e.target.value })
            }
            placeholder="e.g., Show welcome message"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="enabled"
            checked={formData.enabled}
            onChange={(e) =>
              setFormData({ ...formData, enabled: e.target.checked })
            }
            className="w-4 h-4"
          />
          <label htmlFor="enabled" className="text-sm font-medium">
            Enable this rule
          </label>
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>
            <Check size={20} />
            Save
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            <X size={20} />
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export { CMSContent }
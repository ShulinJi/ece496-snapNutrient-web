"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Camera, TrendingUp, Target, Apple } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample data - replace with real data from your backend
const calorieData = [
  { date: 'Mon', calories: 2100 },
  { date: 'Tue', calories: 1950 },
  { date: 'Wed', calories: 2200 },
  { date: 'Thu', calories: 2000 },
  { date: 'Fri', calories: 1850 },
  { date: 'Sat', calories: 2300 },
  { date: 'Sun', calories: 2150 },
]

const recentMeals = [
  { id: 1, name: 'Breakfast', calories: 450, time: '8:30 AM', items: ['Oatmeal', 'Banana', 'Coffee'] },
  { id: 2, name: 'Lunch', calories: 650, time: '12:45 PM', items: ['Grilled Chicken Salad', 'Apple'] },
  { id: 3, name: 'Snack', calories: 200, time: '3:30 PM', items: ['Greek Yogurt', 'Almonds'] },
  { id: 4, name: 'Dinner', calories: 750, time: '7:00 PM', items: ['Salmon', 'Quinoa', 'Vegetables'] },
]

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Stats Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Welcome back, {session?.user?.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Calories</CardTitle>
              <Apple className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,150</div>
              <p className="text-xs text-muted-foreground">
                of 2,200 target
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Average</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,050</div>
              <p className="text-xs text-muted-foreground">
                calories per day
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meals Tracked</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                meals today
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">
                of daily goal
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chart Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Weekly Calorie Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={calorieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="calories" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Meals Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Meals</CardTitle>
              <Link href="/tracking">
                <Button>
                  <Camera className="mr-2 h-4 w-4" />
                  Track New Meal
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMeals.map((meal) => (
                  <div
                    key={meal.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{meal.name}</h3>
                      <p className="text-sm text-gray-500">{meal.time}</p>
                      <p className="text-sm text-gray-600">
                        {meal.items.join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{meal.calories} cal</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nutritional Goals Section */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Calories</span>
                  <span className="text-sm font-medium">2150/2200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Protein</span>
                  <span className="text-sm font-medium">85/100g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Carbs</span>
                  <span className="text-sm font-medium">220/250g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Fat</span>
                  <span className="text-sm font-medium">45/60g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

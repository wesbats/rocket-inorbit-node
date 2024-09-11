import { db } from '../db'
import { goals } from '../db/schema'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export default async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  const result = await db
    .insert(goals)
    .values({
      title,
      desiredWeeklyFrequency,
    })
    .returning()

  const goal = result[0]

  return {
    goal,
  }
}

import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  /*
  const goalsSeed = await db
    .insert(goals)
    .values([
      { title: 'Arcordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 3 },
      { title: 'Meditar', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: goalsSeed[0].id, createdAt: startOfWeek.toDate() },
    { goalId: goalsSeed[1].id, createdAt: startOfWeek.add(1, 'day').toDate() },
  ])
}
*/

  const goalsSeed = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 3 },
      { title: 'Meditar', desiredWeeklyFrequency: 1 },
      { title: 'Estudar programação', desiredWeeklyFrequency: 4 },

      { title: 'Ler um livro', desiredWeeklyFrequency: 3 },
      { title: 'Fazer uma caminhada', desiredWeeklyFrequency: 2 },
      { title: 'Cozinhar uma nova receita', desiredWeeklyFrequency: 1 },
      { title: 'Aprender algo novo', desiredWeeklyFrequency: 5 },

      { title: 'Desenhar algo', desiredWeeklyFrequency: 2 },
      { title: 'Escrever um diário', desiredWeeklyFrequency: 3 },
      { title: 'Ouvir um podcast', desiredWeeklyFrequency: 2 },
      { title: 'Organizar o quarto', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek2 = dayjs().startOf('week')
  const startOfWeek1 = startOfWeek2.subtract(1, 'week')
  const startOfWeek3 = startOfWeek2.add(1, 'week')

  await db.insert(goalCompletions).values([
    { goalId: goalsSeed[0].id, createdAt: startOfWeek1.toDate() },
    { goalId: goalsSeed[0].id, createdAt: startOfWeek1.add(2, 'day').toDate() },
    { goalId: goalsSeed[0].id, createdAt: startOfWeek1.add(4, 'day').toDate() },

    { goalId: goalsSeed[1].id, createdAt: startOfWeek1.toDate() },
    { goalId: goalsSeed[1].id, createdAt: startOfWeek1.add(2, 'day').toDate() },
    { goalId: goalsSeed[1].id, createdAt: startOfWeek1.add(4, 'day').toDate() },

    { goalId: goalsSeed[3].id, createdAt: startOfWeek1.add(1, 'day').toDate() },
    { goalId: goalsSeed[3].id, createdAt: startOfWeek1.add(3, 'day').toDate() },
    { goalId: goalsSeed[3].id, createdAt: startOfWeek1.add(4, 'day').toDate() },

    { goalId: goalsSeed[4].id, createdAt: startOfWeek2.toDate() },
    { goalId: goalsSeed[4].id, createdAt: startOfWeek2.add(1, 'day').toDate() },
    { goalId: goalsSeed[4].id, createdAt: startOfWeek2.add(3, 'day').toDate() },

    { goalId: goalsSeed[5].id, createdAt: startOfWeek2.add(4, 'day').toDate() },

    { goalId: goalsSeed[6].id, createdAt: startOfWeek2.add(3, 'day').toDate() },

    { goalId: goalsSeed[7].id, createdAt: startOfWeek2.add(2, 'day').toDate() },
    { goalId: goalsSeed[7].id, createdAt: startOfWeek2.add(5, 'day').toDate() },

    { goalId: goalsSeed[8].id, createdAt: startOfWeek3.toDate() },
    { goalId: goalsSeed[8].id, createdAt: startOfWeek3.add(2, 'day').toDate() },

    { goalId: goalsSeed[9].id, createdAt: startOfWeek3.toDate() },
    { goalId: goalsSeed[9].id, createdAt: startOfWeek3.add(2, 'day').toDate() },
    { goalId: goalsSeed[9].id, createdAt: startOfWeek3.add(4, 'day').toDate() },

    {
      goalId: goalsSeed[10].id,
      createdAt: startOfWeek3.add(1, 'day').toDate(),
    },
    {
      goalId: goalsSeed[10].id,
      createdAt: startOfWeek3.add(3, 'day').toDate(),
    },

    {
      goalId: goalsSeed[11].id,
      createdAt: startOfWeek3.add(5, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})

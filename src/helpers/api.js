export async function getAllTasks() {

    const response = await fetch('http://localhost:3001/tasks')

    return await response.json()

}
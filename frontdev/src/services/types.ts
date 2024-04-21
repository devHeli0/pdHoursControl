// export type DocsList = Array<{ name: string; url: string }>

// export interface Employee {
//   id: number
//   name: string
//   estimatedHours: number
//   squadId: number
//   squad: Squad
//   reports: Report[]
// }

export type getAllSquadsResponse = {
  success: boolean
  data: {
    list: Squad[]
  }
}

export type getAllReportsResponse = {
  success: boolean
  data: {
    list: Report[]
  }
}

export type Squad = {
  id: number
  name: string
}

export type Report = {
  id: number
  description: string
  employeeId: number
  spentHours: number
  createdAt: string
}

// export type GetSquadsResponse = {
//   success: boolean
//   data: {
//     list: Squad[]
//   }
// }

// export interface Report {
//   id: number
//   description: string
//   employeeId: number
//   spentHours: number
//   createdAt: Date
//   employee: Employee
// }

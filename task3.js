const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  
//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать
//      количество сотрудников. Для предприятия посчитать сумму 
//      всех сотрудников во всех отделах.
  
//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

    
const result = enterprises.forEach(gov => {
        if (gov.departments){ 
            let govTotal = gov.departments.reduce ((acc, person) =>acc + person.employees_count,0)
                if (govTotal !==0){
                    console.log(`${gov.name} (${govTotal} сотрудников)`)
                }else{ 
            
                    console.log(`${gov.name} (нет сотрудников)`)
                }
            gov.departments.forEach(dep =>{
                 
                if (govTotal !==0 && dep.employees_count !==0){ 
                    
                    console.log(`-${dep.name}  (${dep.employees_count} сотрудников)`)
                }else{ 
                    
                    console.log(`-${dep.name}  (нет сотрудников)`)
                }
                
            })
        }   
    })
// 2. Написать функцию, которая будет принимать 1 аргумент 
// (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

// 3. Написать функцию, которая будет добавлять предприятие. В
// качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. 
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. 
// Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")


// 6. Написать функцию для редактирования названия отдела. 
// Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
// Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники
// и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

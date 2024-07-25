// array of groups



interface Group {
    id: string;
    name: string;
  
    }

    const groups: Group[] = [
        {
          id: '1group',
          name: 'Bs Morning',
        },
        {
            id: '2group',
            name: 'Bs Evening',
            },
            {
            id: '3group',
            name: 'Intermediate Morning',

        },
        {
            id: '4group',
            name: 'Intermediate Evening',
        },{
            id: '5group',
            name: 'ADP',
        },
       
      
      ];
      
      export default groups;
      
      export type { Group };

      // array subcategories

      interface groupSubCategory {
        id: string;
        groupName: string;
        subCategory?: string[];
        
      }
      const groupSubCategories: groupSubCategory[] = [
        {
            id: '1groupSubCategory',
            groupName: 'Bs Morning',
            subCategory: ['1st semester', '3rd semester', '5th semester', '7th semester']
            

        },
        {
            id: '2groupSubCategory',
            groupName: 'Bs Evening',
            subCategory: ['1st semester', '3rd semester', '5th semester', '7th semester']
        },
        {
            id: '3groupSubCategory',
            groupName: 'Intermediate Morning',
            subCategory: ['1st year', '2nd year']
        },
        {
            id: '4groupSubCategory',
            groupName: 'Intermediate Evening',
            subCategory: ['1st year', '2nd year']
        },
        {
            id: '5groupSubCategory',
            groupName: 'ADP',
            subCategory: ['1st year', '2nd year']
        },

    ]
    export  {groupSubCategories};

    // time slots
    interface timeSlot {
        startTime: string;
        endTime: string;
        id: string;
        }

        const timeSlotsMorning: timeSlot[] = [
            {
              id: '1timeSlot',
              startTime: '8:00',
              endTime: '9:00',
            },
            {
                id: '2timeSlot',
                startTime: '9:00',
                endTime: '10:00',
              },
              {
                id: '3timeSlot',
                startTime: '10:00',
                endTime: '11:00',
              },
              {
                id: '4timeSlot',
                startTime: '11:00',
                endTime: '12:00',
              },
              {
                id: '5timeSlot',
                startTime: '12:00',
                endTime: '1:00',
              },
              {
                id: '6timeSlot',
                startTime: '1:00',
                endTime: '2:00',
              },
              {
                id: '7timeSlot',
                startTime: '2:00',
                endTime: '3:00',
              },
            
          
          
          ];
          
          export  {timeSlotsMorning};
          
          export type { timeSlot };

          const timeSlotsEvening: timeSlot[] = [
            {
              id: '1timeSlotEvening',
              startTime: '12:00',
              endTime: '1:00',
            },
            {
                id: '2timeSlotEvening',
                startTime: '1:00',
                endTime: '2:00',
              },
              {
                id: '3timeSlotEvening',
                startTime: '2:00',
                endTime: '3:00',
              },
              {
                id: '4timeSlotEvening',
                startTime: '3:00',
                endTime: '4:00',
              },
              {
                id: '5timeSlotEvening',
                startTime: '4:00',
                endTime: '5:00',
              },

             
          
          
          ];
        export {timeSlotsEvening};

        interface Department {
          id : string;
          name: string;
          rooms?: string[];
          teachers?: string[];
          shift: string;
          isDoubleGroup?: boolean;
          group?:string[]
        }

        const departments: Department[] = [
          {
             id: 'cs1department',
              name: 'Computer Science G1',
              rooms: ['Room 1', 'Room 2', 'Room 3'],
              teachers: ['Teacher 1', 'Teacher 2', 'Teacher 3'],
              shift: "both",
              isDoubleGroup: true,
              group: ['G1', 'G2']
          },
          {
             id: 'cs2department',
              name: 'Computer Science G2',
              rooms: ['Room 1', 'Room 2', 'Room 3'],
              teachers: ['Teacher 1', 'Teacher 2', 'Teacher 3'],
              shift: "both",
              isDoubleGroup: true,
              group: ['G1', 'G2']
          },
          {
            id: 'bba1department',
            name: 'BBA G1',
            rooms: ['Room 4', 'Room 5', 'Room 6'],
            teachers: ['Teacher 4', 'Teacher 5', 'Teacher 6'],
            shift: "both",
            isDoubleGroup: true,
            group: ['G1', 'G2']
          },
          {
            id: 'bba2department',
            name: 'BBA G2',
            rooms: ['Room 4', 'Room 5', 'Room 6'],
            teachers: ['Teacher 4', 'Teacher 5', 'Teacher 6'],
            shift: "both",
            isDoubleGroup: true,
            group: ['G1', 'G2']
          },
          {
            id: '3department',
            name: 'English',
            rooms: ['Room 7', 'Room 8', 'Room 9'],
            shift: "morning",
            teachers: ['Teacher 7', 'Teacher 8', 'Teacher 9'],
           
          },
          {
            id: '4department',
            name: 'Mathematics',
            rooms: ['Room 10', 'Room 11', 'Room 12'],
            teachers: ['Teacher 10', 'Teacher 11', 'Teacher 12'],
            shift: "morning",
            isDoubleGroup: false,
          },
          {
            id: '5department',
            name: 'Physics',
            rooms: ['Room 13', 'Room 14', 'Room 15'],
            shift: "morning",
            teachers: ['Teacher 13', 'Teacher 14', 'Teacher 15'],
           
          },
          {
            id: '6department',
            name: 'Chemistry',
            rooms: ['Room 16', 'Room 17', 'Room 18'],
            shift: "morning",
            teachers: ['Teacher 16', 'Teacher 17', 'Teacher 18'],
           
          },
          {
            id: '7department',
            name: 'Urdu',
            rooms: ['Room 19', 'Room 20', 'Room 21'],
            teachers: ['Teacher 19', 'Teacher 20', 'Teacher 21'],
            shift: "morning",
           
          },
          {
            id: '8department',
            name: 'Islamiyat',
            rooms: ['Room 22', 'Room 23', 'Room 24'],
            teachers: ['Teacher 22', 'Teacher 23', 'Teacher 24'],
            shift: "morning",
           
          },
          {
            id: '9department',
            name: 'Inter physics',
            rooms: ['Room 25', 'Room 26', 'Room 27'],
            teachers: ['Teacher 25', 'Teacher 26', 'Teacher 27'],
            shift: "morning",
            isDoubleGroup: true,
            group: ['G1', 'G2', 'G3']
          },
          {
            id: '10department',
            name: 'Inter computer',
            rooms: ['Room 28', 'Room 29', 'Room 30'],
            teachers: ['Teacher 28', 'Teacher 29', 'Teacher 30'],
            shift: "morning",
            isDoubleGroup: true,
            group: ['G1', 'G2', 'G3']
          }

        ]

        export { departments};

        //previous data

        export interface TimeSlot {
          subject: string;
          teacher: string;
          room: string;
        }
        
        export interface TimetableData {
          [key: string]: TimeSlot[][];
        }
        
        export const timetableData: TimetableData = {
          "1st semester": [
            [
              { subject: "Math", teacher: "Mr. Smith", room: "101" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "102" },
              { subject: "English", teacher: "Mr. Brown", room: "103" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "104" },
              { subject: "Science", teacher: "Mr. Wilson", room: "105" },
              { subject: "History", teacher: "Mr. Clark", room: "106" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "107" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            [
              { subject: "Math", teacher: "Mr. Smith", room: "108" },
              { subject: "Computer Science", teacher: "Ms. Johnson", room: "109" },
              { subject: "English", teacher: "Mr. Brown", room: "110" },
              { subject: "Urdu", teacher: "Ms. Davis", room: "111" },
              { subject: "Science", teacher: "Mr. Wilson", room: "112" },
              { subject: "History", teacher: "Mr. Clark", room: "113" },
              { subject: "Geography", teacher: "Ms. Lewis", room: "114" },
            ],
            // Repeat for 8 more classes
          ],
          "3rd semester": [
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "201" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "202" },
              { subject: "Literature", teacher: "Mr. Brown", room: "203" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "204" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "205" },
              { subject: "World History", teacher: "Mr. Clark", room: "206" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "207" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            [
              { subject: "Advanced Math", teacher: "Mr. Smith", room: "208" },
              { subject: "Data Structures", teacher: "Ms. Johnson", room: "209" },
              { subject: "Literature", teacher: "Mr. Brown", room: "210" },
              { subject: "Advanced Urdu", teacher: "Ms. Davis", room: "211" },
              { subject: "Physics", teacher: "Mr. Wilson", room: "212" },
              { subject: "World History", teacher: "Mr. Clark", room: "213" },
              { subject: "Environmental Science", teacher: "Ms. Lewis", room: "214" },
            ],
            // Repeat for 8 more classes
          ],
          "5th semester": [
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "301" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "302" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "303" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "304" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "305" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "306" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "307" },
            ],
            [
              { subject: "Calculus", teacher: "Mr. Smith", room: "308" },
              { subject: "Algorithms", teacher: "Ms. Johnson", room: "309" },
              { subject: "Creative Writing", teacher: "Mr. Brown", room: "310" },
              { subject: "Poetry", teacher: "Ms. Davis", room: "311" },
              { subject: "Chemistry", teacher: "Mr. Wilson", room: "312" },
              { subject: "Modern History", teacher: "Mr. Clark", room: "313" },
              { subject: "Geology", teacher: "Ms. Lewis", room: "314" },
            ],
            // Repeat for 8 more classes
          ],
          "7th semester": [
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "401" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "402" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "403" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "404" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "405" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "406" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "407" },
            ],
            [
              { subject: "Linear Algebra", teacher: "Mr. Smith", room: "408" },
              { subject: "Machine Learning", teacher: "Ms. Johnson", room: "409" },
              { subject: "Shakespeare", teacher: "Mr. Brown", room: "410" },
              { subject: "Classical Urdu", teacher: "Ms. Davis", room: "411" },
              { subject: "Biology", teacher: "Mr. Wilson", room: "412" },
              { subject: "Ancient History", teacher: "Mr. Clark", room: "413" },
              { subject: "Astronomy", teacher: "Ms. Lewis", room: "414" },
            ],
            // Repeat for 8 more classes
          ],
        };

     export const morningBsClass = [
          { name: 'CS G1', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'CS G2', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'BBA G1', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'BBA G2', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'English', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Mathematics', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'Physics', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Chemistry', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'Urdu', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Islamiyat', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
         
        
        ];
     export const eveningBsClass = [
          { name: 'CS G1', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'CS G2', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'BBA G1', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'BBA G2', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'English', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Mathematics', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'Physics', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Chemistry', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
          { name: 'Urdu', subjects: ['Math', 'Science', 'History', 'English', 'Art', 'Physics', 'Chemistry'] },
          { name: 'Islamiyat', subjects: ['Geography', 'Biology', 'Math', 'Physical Education', 'Music', 'Computer Science', 'Literature'] },
      
         
        
        ];
        
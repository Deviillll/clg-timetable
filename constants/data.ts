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
              startTime: '1:00',
              endTime: '2:00',
            },
            {
                id: '2timeSlotEvening',
                startTime: '2:00',
                endTime: '3:00',
              },
              {
                id: '3timeSlotEvening',
                startTime: '3:00',
                endTime: '4:00',
              },
              {
                id: '4timeSlotEvening',
                startTime: '4:00',
                endTime: '5:00',
              },
             
          
          
          ];
        export {timeSlotsEvening};
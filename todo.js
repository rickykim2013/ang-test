angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todoText = '22 '
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };


    
    todoList.sampleSort = function(){
        var arr = ['1','24','d','a','c','f'];
        //arr.sort((a,b)=> a.localeCompare(b));
        arr.sort((a,b)=> b-a);
        return arr;
    }

    todoList.sampleSort2 = function(){
        var arr = ['a1','d','a','c','f'];
        console.log('old',arr);
        //arr.sort((a,b)=> a.localeCompare(b));
        arr.sort((a,b)=>{ 
            if(a>b) return -1;
            else if(a<b) return 1;
            else return 0
        })

        console.log('new111',arr);    
    }

    todoList.sampleRemove = function(){
        var arr = ['a1','24','d','a','c','f'];
        var element = arr.pop();
        return "last = " + element + " arr " + arr;
    }

    todoList.removeDup = function(){
        var arr = ['a1','a','d','a','c','f'];
        let newArr = arr.filter(  (item,index) =>arr.indexOf(item) === index )
        console.log('old',arr);
        console.log('new',newArr);
    }
    todoList.removeDup2 = function(){
        var arr = ['1','a','d','a','c','f'];
        let newArr = [];
        arr.forEach((item,index)=>{
            if (!newArr.includes(item)){
                newArr.push(item)
            };
        });
        console.log('old',arr);
        console.log('new',newArr);
    }
            
    


    /*
        Arrays: Left Rotation
    */
    function rotLeft(arr, d) {
        let newArr = [];
        console.log('new',newArr); ;
     
        for(let i=0;i<arr.length;i++){
            let val = arr[i] ;
            let newIndex = i - d;
            if(newIndex < 0){
                newIndex = arr.length + newIndex;
            }
            console.log('',val, i, newIndex); ;
            newArr[newIndex] = val   ;
            
        }   
        console.log('od',arr); ;
        console.log('new',newArr); ;
    }


    function minimumSwaps(arr) {
        const oldArr = [...arr];
        const checkArrStr = oldArr.sort((a,b)=>a-b).join();
        let tempArrStr = '';
      
        let swapCnt = 0;
        let stopFlag = false;
        console.log(arr )
        function bar(){
            return 3;
        }
        return bar()

        function bar(){
            return 3;
        }
        // for(let i=0;i<arr.length;i++){

        //     let k=0;
            
        //     for(let j=0;j<arr.length ;j++){
        //         k=i+j+1;
        //         if(k>arr.length){
        //             k = arr.length - k ;
        //         }
                
                
        //         if(arr[i]>arr[k]){
        //             arr[i] = arr[k];
        //             arr[k] = arr[i];
        //             swapCnt++;
        //         }
        //         tempArrStr = arr.join()
               
        //         if(checkArrStr === tempArrStr){
        //             break;
        //         }
        //     }
        // }   
      
        // console.log(swapCnt )
        return swapCnt;
      }
    todoList.sampleTestOutPut = function(){
        var arr = [3, 7,6, 9, 1, 8, 10, 4, 2, 5];
        //console.log('run',rotLeft(a,3));
        console.log('run',minimumSwaps(arr)); 

            
    }
    
  });
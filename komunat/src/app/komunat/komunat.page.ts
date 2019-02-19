import { Component, OnInit } from '@angular/core';
import { NavController, Events } from "@ionic/angular";
import { ngControlStatusHost } from '@angular/forms/src/directives/ng_control_status';

@Component({
  selector: 'app-komunat',
  templateUrl: './komunat.page.html',
  styleUrls: ['./komunat.page.scss'],
})
export class KomunatPage {

  constructor(public navCtrl: NavController) {
  }

  btn0Val;
  btn1Val;

  lesser = [];
  greater = [];
  comparer = []
  insertIndex = 0;
  decisionCounter = 0;
  startedTimeStamp = 0;

  initarr = [    
    [
        {
            "id":0,
            "name":"Menschenrechte",
            "rating":0
        },
        {
            "id":1,
            "name":"Meinungsfreiheit",
            "rating":0
        },
        {
            "id":2,
            "name":"Religionsfreiheit",
            "rating":0
        },
        {
            "id":3,
            "name":"Solidarität",
            "rating":0
        },
        {
             "id":4,
             "name":"Gerechtigkeit",
             "rating":0
        },
        {
              "id":5,
              "name":"Frieden",
              "rating":0
        },
        {
              "id":6,
              "name":"Pressefreiheit",
              "rating":0
        },
        {
             "id":7,
             "name":"Gleichberechtigung",
             "rating":0
        },
        {
             "id":8,
             "name":"Chancengleichheit",    
             "rating":0
        },
        {
            "id":9,
             "name":"Patriotismus",
             "rating":0
        },
        {
            "id":10,
            "name":"Tradition",
            "rating":0
        },
        {
            "id":11,
            "name":"Toleranz",
            "rating":0
        }
    ]
]

  arr = [    
    [
        {
            "id":0,
            "name":"Menschenrechte",
            "rating":0
        },
        {
            "id":1,
            "name":"Meinungsfreiheit",
            "rating":0
        },
        {
            "id":2,
            "name":"Religionsfreiheit",
            "rating":0
        },
        {
            "id":3,
            "name":"Solidarität",
            "rating":0
        },
        {
             "id":4,
             "name":"Gerechtigkeit",
             "rating":0
        },
        {
              "id":5,
              "name":"Frieden",
              "rating":0
        },
        {
              "id":6,
              "name":"Pressefreiheit",
              "rating":0
        },
        {
             "id":7,
             "name":"Gleichberechtigung",
             "rating":0
        },
        {
             "id":8,
             "name":"Chancengleichheit",    
             "rating":0
        },
        {
            "id":9,
             "name":"Patriotismus",
             "rating":0
        },
        {
            "id":10,
            "name":"Tradition",
            "rating":0
        },
        {
            "id":11,
            "name":"Toleranz",
            "rating":0
        }
    ]
]

  ionViewWillEnter(){
    console.log("init")
      this.arr = this.initarr
      this.newRound()
  }

  private newRound(): void {
    var needsToBeSorted = false
    // We iterate over the whole array and check if we have to sort sth. 
    for (var i = 0; i < this.arr.length; i++) {
        if(this.arr[i].length > 1) {
            this.insertIndex = i;
            needsToBeSorted = true
            break;
        }
    }
    if (needsToBeSorted) {
        // Let's get started to sort. 
        var sortArray = this.arr[i]
        var v0 = this.getRandomIndex(sortArray)
        this.comparer = sortArray.slice(0)
        this.arr.splice(this.insertIndex,1)
        this.sort(v0[0])
    } else {
        // Finished overall sorting, since nothing has to be sorted anymore.
        console.log("Finished sorting with " + this.decisionCounter + " decisions")
        this.calculateValue()
        this.wrapResult()
        this.btn0Val.name = ""
        this.btn1Val.name = ""
        //this.collapseAndRotate()
        this.sendResult(this.arr)
        this.decisionCounter = 0;
    }
  }

  // Sort will be called after triggering a new round adn after each decision
  private sort(fixed) {
  if(this.comparer.length > 0) {
      var v1 = this.getRandomIDExcept(fixed.id, this.comparer)
      this.btn0Val = fixed
      this.btn1Val = v1
  }
  else {
      this.completeRound()
  }
  }

// onClick event of the buttons
private selected(index) {
  if (this.decisionCounter == 0) {
      this.startedTimeStamp = new Date().getTime()/1000;
      this.startedTimeStamp = parseInt(this.startedTimeStamp.toString())
      console.log(this.startedTimeStamp)
  }
  this.decisionCounter++;
  if (index == 0) {
      // Push the value to the lesser array
      this.lesser.push(this.btn1Val)
      //this.transition(0)
  }
  else {
      // Push the value to the greater array
      this.greater.push(this.btn1Val)
      //this.transition(1)
  }
  // Finally, remove the value from the comparer array and sort again
  this.removeById(this.btn1Val.id)
  this.sort(this.btn0Val)
}


// When finishing comparing one value, we "finish" the round and sort in the related arrays
private completeRound() {
  // Add the lesser array    
  if (this.lesser.length > 0) {
      if (this.lesser.length > 1) {
        this.arr.splice(this.insertIndex, 0, this.lesser);                                    
      }
      else {
        this.arr.splice(this.insertIndex, 0, this.lesser[0]); 
      }
  }
  // Add the comparer value between the lesser and greater
  this.arr.splice(this.insertIndex,0,this.btn0Val)

  // Add the greater array after the comparer
  if (this.greater.length > 0) {
      if (this.greater.length > 1) {
        this.arr.splice(this.insertIndex, 0, this.greater);
      } 
      else {
        this.arr.splice(this.insertIndex, 0, this.greater[0]); 
      }
  }
  // Clean up values again and start a new round
  this.lesser = []
  this.greater = []
  //deepLog(arr,"TopArray")
  this.newRound()
}
/*
// Helper function to monitor the array
function deepLog(arr,name) {
  
  console.log("--------"+name+"-------------")
  console.log("--------"+arr.length+"-------------")
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i])
  }
  console.log("-------------------------------")
}
*/
// Get random object out of itm as touple with index
private getRandomIndex(itm){
  var rand = Math.floor(Math.random() * Math.floor(itm.length));
  return [itm[rand],rand]
}
// Used to get a random object except an specified one. ( for getting unused values )
private getRandomIDExcept(except,arr) {
 
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == except) {
          arr.splice(i,1)
      }
  }
  var num = Math.floor(Math.random() * (arr.length-1 + 1));
  return arr[num]
}
// Remove the value from the comparer array, whenever it is already compared
private removeById(id) {
  for (var i = 0; i < this.comparer.length; i++) {
      if (this.comparer[i].id == id) {
          this.comparer.splice(i,1)
      }
  }
}

// Calculating the final result
private calculateValue() {
  var rank = this.arr.length-1;
  for (var i = 0; i < this.arr.length; i++) {
      this.arr[i]["rating"] = rank
      rank--
  }
  console.log(this.arr)
}

// used to set the metadata of the results
private wrapResult() {
  
}

// Send the calculated result of the user to the backend
private sendResult(a) {

  var res = {
    metadata:{},
    values: {}
   }
  // Setup some metadata format
  var finished = new Date().getTime()/1000;
  finished = parseInt(finished.toString())
  res.metadata = {
      isCandidate: false,
      started: this.startedTimeStamp,
      finished: finished,
      decisions: this.decisionCounter
  }
  // Append the values 
  res.values = a

  var xhr = new XMLHttpRequest();
  var url = "http://192.168.2.119:3000/result";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Successfully stored values, continue with animation
          console.log("Successfully uploaded result")
          //fakeLoad()
          this.moveOn()
      }
  };
  var data = JSON.stringify(res);
  console.log(data)
  xhr.send(data);
}

  moveOn() {
    console.log("Moving on")
    this.navCtrl.navigateForward('/matches');
}
}

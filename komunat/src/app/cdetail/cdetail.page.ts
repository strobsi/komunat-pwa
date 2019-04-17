import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cdetail',
  templateUrl: './cdetail.page.html',
  styleUrls: ['./cdetail.page.scss'],
})
export class CdetailPage implements OnInit {

  candidate = 
  {
    "metadata": {
      "isCandidate": true,
      "started": 1554827326,
      "finished": 1554827527,
      "decisions": 41,
      "uuid": "00uk7chs79ZpAzglO0h7"
    },
    "contents": [
      {
        "id": 11,
        "name": "Eine klimaneutrale Stadt gestalten",
        "rating": 12
      },
      {
        "id": 0,
        "name": "Bezahlbaren Wohnraum schaffen",
        "rating": 11
      },
      {
        "id": 2,
        "name": "Alternativen zum Auto fördern",
        "rating": 10
      },
      {
        "id": 9,
        "name": "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
        "rating": 9
      },
      {
        "id": 3,
        "name": "Die Kinderbetreuung ausbauen",
        "rating": 8
      },
      {
        "id": 6,
        "name": "Langfristige Integration und das Zusammenleben in der Stadt fördern",
        "rating": 7
      },
      {
        "id": 7,
        "name": "Schulen sanieren",
        "rating": 6
      },
      {
        "id": 8,
        "name": "Subkultur fördern",
        "rating": 5
      },
      {
        "id": 12,
        "name": "Kommunalpolitik transparenter machen",
        "rating": 4
      },
      {
        "id": 10,
        "name": "Die regionale Wirtschaft fördern",
        "rating": 3
      },
      {
        "id": 1,
        "name": "Preise für Bus und Bahn senken",
        "rating": 2
      },
      {
        "id": 5,
        "name": "Für mehr Sicherheit im öffentlichen Raum sorgen",
        "rating": 1
      },
      {
        "id": 4,
        "name": "Keine neuen Schulden für die Stadt machen",
        "rating": 0
      }
    ],
    "candidate": {
      "name": "Dr. Sebastian Karl",
      "birthdate": "30.09.1987",
      "list": "2",
      "list_number": "24",
      "district": "5",
      "phone": "01772854755",
      "motto": "Gutes Klima schaffen für ein gesundes Stuttgart!"
    },
    "values": [
      {
        "id": 2,
        "name": "Menschenwürde",
        "rating": 11
      },
      {
        "id": 3,
        "name": "Gerechtigkeit",
        "rating": 10
      },
      {
        "id": 5,
        "name": "Meinungsfreiheit",
        "rating": 9
      },
      {
        "id": 11,
        "name": "Rechtsstaatlichkeit",
        "rating": 8
      },
      {
        "id": 6,
        "name": "Pressefreiheit",
        "rating": 7
      },
      {
        "id": 4,
        "name": "Toleranz",
        "rating": 6
      },
      {
        "id": 7,
        "name": "Nachhaltigkeit",
        "rating": 5
      },
      {
        "id": 9,
        "name": "Selbstbestimmung",
        "rating": 4
      },
      {
        "id": 1,
        "name": "Solidarität",
        "rating": 3
      },
      {
        "id": 8,
        "name": "Wohlstand",
        "rating": 2
      },
      {
        "id": 0,
        "name": "Sicherheit",
        "rating": 1
      },
      {
        "id": 10,
        "name": "Tradition",
        "rating": 0
      }
    ]
  }

  events = [
    {
      title:"Speakers Corner: Bezahlbaren Wohnraum schaffen",
      date:"22.05.2019",
      time:"19:00 Uhr",
      location:"Straßenname Nr 73219 Stadt"
    }
  ]

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     //this.candidate = JSON.parse(params["candidate"]);
     console.log(this.candidate)
    });
  }

  public back() {
    console.log("Clicked back")
    this.navCtrl.pop();
  }
}

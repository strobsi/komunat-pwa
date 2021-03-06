import { Component, OnInit, ViewChild } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { IonSlides } from "@ionic/angular";
import anime from "animejs";
import "hammerjs";
import { PSTATE } from "../utils/pstate";
import { NavController, Platform } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { Storage } from "@ionic/storage";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.page.html",
  styleUrls: ["./matches.page.scss"],
  animations: [
    trigger("items", [
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }), // initial
        animate(
          "0.6s cubic-bezier(.4, -0.6, 0.2, 1.5)",
          style({ transform: "scale(1)", opacity: 1 })
        ), // final
      ]),
      transition(":leave", [
        style({ transform: "translateY(-10in)", opacity: 0, height: "*" }),
        animate(
          "0.4s cubic-bezier(.4, -0.6, 0.2, 0.6)",
          style({
            transform: "scale(0.5)",
            opacity: 0,
            height: "0px",
            margin: "0px",
          })
        ),
      ]),
    ]),
  ],
})
export class MatchesPage implements OnInit {
  SHOW_STATE;
  NO_TUTORIAL;
  @ViewChild(IonSlides) slides: IonSlides;

  matches = [
    {
      show_distance: 1,
      distance: 1,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 2,
      distance: 2.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 3,
      distance: 3.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 4,
      distance: 4.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 5,
      distance: 5.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 6,
      distance: 6.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 7,
      distance: 7.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 8,
      distance: 8.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 9,
      distance: 9.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 10,
      distance: 10.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 11,
      distance: 11.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 12,
      distance: 12.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 13,
      distance: 13.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 14,
      distance: 14.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 15,
      distance: 15.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 16,
      distance: 16.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 17,
      distance: 17.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 18,
      distance: 18.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 19,
      distance: 19.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 20,
      distance: 20.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 21,
      distance: 21.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 22,
      distance: 22.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 23,
      distance: 23.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 27,
      distance: 27.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 28,
      distance: 28.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 29,
      distance: 29.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 30,
      distance: 30.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 31,
      distance: 31.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 32,
      distance: 32.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 33,
      distance: 33.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 34,
      distance: 34.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 35,
      distance: 35.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 36,
      distance: 36.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 37,
      distance: 37.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 38,
      distance: 38.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 39,
      distance: 39.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 40,
      distance: 40.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 41,
      distance: 41.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 42,
      distance: 42.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 43,
      distance: 43.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 44,
      distance: 44.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 45,
      distance: 45.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 46,
      distance: 46.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 12,
      distance: 12.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 47,
      distance: 47.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 48,
      distance: 48.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 49,
      distance: 49.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 50,
      distance: 50.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 51,
      distance: 51.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 52,
      distance: 52.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 53,
      distance: 53.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 54,
      distance: 54.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 55,
      distance: 55.0,
      name: "Michael Romacker ",
      birthdate: "10.10.1960",
      uuid: "12343",
      image: "avatar5.png",
      list: "6",
      list_number: "2",
      district: "3",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 56,
      distance: 56.0,
      name: "HdM Stuttgart ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar6.png",
      list: "8",
      list_number: "1",
      district: "2",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 57,
      distance: 57.0,
      name: "Thomas Müller ",
      birthdate: "01.01.1970",
      uuid: "12343",
      image: "avatar.png",
      list: "1",
      list_number: "1",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 58,
      distance: 58.0,
      name: "Max Mustermann ",
      birthdate: "27.12.1993",
      uuid: "12343",
      image: "avatar2.png",
      list: "2",
      list_number: "3",
      district: "7",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 59,
      distance: 59.0,
      name: "Alina Schleiss ",
      birthdate: "12.05.1988",
      uuid: "12343",
      image: "avatar3.png",
      list: "3",
      list_number: "4",
      district: "5",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 0, name: "Macht", rating: 11 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 6, name: "Sicherheit", rating: 2 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 7, name: "Leistung", rating: 10 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
    {
      show_distance: 60,
      distance: 60.0,
      name: "Melanie Musterfrau ",
      birthdate: "27.01.1971",
      uuid: "12343",
      image: "avatar4.png",
      list: "4",
      list_number: "1",
      district: "4",
      phone: "+1234567890",
      motto: "Lorem ipsum dolor",
      values: [
        { id: 0, name: "Macht", rating: 11 },
        { id: 7, name: "Leistung", rating: 10 },
        { id: 1, name: "Genuss", rating: 9 },
        { id: 10, name: "Anregung", rating: 8 },
        { id: 3, name: "Selbstbestimmung", rating: 7 },
        { id: 2, name: "Sozial-ökologischer Weitblick", rating: 6 },
        { id: 9, name: "Soziale Beziehungen", rating: 5 },
        { id: 11, name: "Tradition", rating: 4 },
        { id: 5, name: "Pflichttreue", rating: 3 },
        { id: 6, name: "Sicherheit", rating: 2 },
      ],
      contents: [
        { id: 0, name: "Bezahlbaren Wohnraum schaffen", rating: 12 },
        { id: 11, name: "Eine klimaneutrale Stadt gestalten", rating: 11 },
        { id: 2, name: "Alternativen zum Auto fördern", rating: 10 },
        {
          id: 5,
          name: "Für mehr Sicherheit im öffentlichen Raum sorgen",
          rating: 9,
        },
        { id: 10, name: "Die regionale Wirtschaft fördern", rating: 8 },
        { id: 1, name: "Preise für Bus und Bahn senken", rating: 7 },
        { id: 3, name: "Die Kinderbetreuung ausbauen", rating: 6 },
        {
          id: 6,
          name:
            "Langfristige Integration und das Zusammenleben in der Stadt fördern",
          rating: 5,
        },
        { id: 7, name: "Schulen sanieren", rating: 4 },
        {
          id: 9,
          name:
            "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
          rating: 3,
        },
        { id: 12, name: "Kommunalpolitik transparenter machen", rating: 2 },
        { id: 8, name: "Subkultur fördern", rating: 1 },
        {
          id: 4,
          name: "Keine neuen Schulden für die Stadt machen",
          rating: 0,
        },
      ],
    },
  ];

  result = { values: [], contents: [] };
  page = 1;
  LAST = false;
  pdfObj = null;

  substitutes = [];
  present_title = "DEIN ERGEBNIS";

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private ga: GoogleAnalytics,
    public platform: Platform
  ) {}

  swipedRight(e, i) {
    this.accept(i);
  }

  swipedLeft(e, i) {
    this.reject(i);
  }

  backToMatches(t, i) {
    if (t == 0) {
      // Coming from subs
      const element = document.querySelector(".match_" + i);
      this.matches.push(this.substitutes[i]);
      this.substitutes.splice(i, 1);
      this.pulseTeam();
      anime({
        targets: element,
        translateX: "150vw",
        rotate: 40,
        easing: "easeInOutQuad",
        duration: 400,
      });
    }
  }

  private loadResults(a) {
    var xhr = new XMLHttpRequest();
    var url = "https://komunat.de/result";
    a.page = this.page;
    var data = JSON.stringify(a);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);
        if (this.page == 1) {
          this.matches = data;
        } else {
          if (data.length < 30) {
            this.LAST = true;
          }
          for (var i = 0; i < data.length; i++) {
            console.log("Appending to existing");
            this.matches.push(data[i]);
          }
        }
        this.sortMatches();
      } else if (xhr.readyState === 0) {
        xhr.send(data);
      }
    };
    xhr.send(data);
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.ga
        .trackView("matches")
        .then(() => {
          this.ga.trackEvent("userflow", "Reached Matches").then(() => {});
        })
        .catch((e) => console.log(e));
    });

    this.setState(PSTATE.MATCHES);
    this.storage.get("matches").then((result) => {
      if (!result) {
      } else {
        var a = JSON.parse(result);
        this.NO_TUTORIAL = false;
        this.result = a;
        this.page = 1;
        this.loadResults(a);
      }
    });
  }

  public reject(i) {
    const element = document.querySelector(".match_" + i);
    this.swipeOutLeft(element, i);
  }

  public accept(i) {
    const element = document.querySelector(".match_" + i);
    this.swipeOutRight(element, i);
  }

  private swipeOutLeft(elem, i) {
    this.pulseSubstitute();
    anime({
      targets: elem,
      translateX: "-150vw",
      rotate: -40,
      easing: "easeInOutQuad",
      duration: 400,
    });
    var m = this.matches;
    var s = this.substitutes;
    setTimeout(function () {
      s.push(m[i]);
      m.splice(i, 1);
    }, 220);
  }

  private swipeOutRight(elem, i) {
    this.pulseTeam();
    anime({
      targets: elem,
      translateX: "150vw",
      rotate: 40,
      easing: "easeInOutQuad",
      duration: 400,
    });
    var m = this.matches;
    setTimeout(function () {
      m.splice(i, 1);
    }, 220);
  }

  backClicked() {
    this.setState(PSTATE.MATCHES);
    var subs = document.querySelector(".substitutesBtn");
    var lbl = document.querySelector(".mainLbl");
    anime({
      targets: [subs],
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 200,
      complete: function () {
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        lbl.removeAttribute("hidden");
        subs.removeAttribute("hidden");
        back.setAttribute("hidden", "false");
      },
    });
    // TODO hide subs and show matches
  }

  showSubstitutes() {
    this.setState(PSTATE.SUBS);
    var subs = document.querySelector(".substitutesBtn");
    var lbl = document.querySelector(".mainLbl");
    anime({
      targets: [subs],
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 200,
      complete: function () {
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        subs.setAttribute("hidden", "true");
        lbl.setAttribute("hidden", "true");
        back.removeAttribute("hidden");
      },
    });
    // TODO: show subs and hide matches
  }

  showTeam() {
    this.setState(PSTATE.TEAM);
    var subs = document.querySelector(".substitutesBtn");
    var team = document.querySelector(".teamBtn");
    anime({
      targets: [subs, team],
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 200,
      complete: function () {
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        subs.setAttribute("hidden", "true");
        back.removeAttribute("hidden");
      },
    });
    // TODO: show subs and hide matches
  }

  public showDetails(i) {
    // Show details of selected candidate
    var c;
    if (this.SHOW_STATE == 1) {
      c = this.matches[i];
    } else if (this.SHOW_STATE == 2) {
      c = this.substitutes[i];
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        candidate: JSON.stringify(c),
      },
    };
    this.navCtrl.navigateForward(["cdetail"], navigationExtras);
  }

  public pulseTeam() {
    var elem = document.querySelector(".teamBtn");
    anime({
      targets: elem,
      scale: 1.1,
      color: "#59BCED",
      easing: "easeInOutQuad",
      translateY: "-1vh",
      duration: 200,
      direction: "alternate",
    });
  }

  public pulseSubstitute() {
    var elem = document.querySelector(".substitutesBtn");
    anime({
      targets: elem,
      scale: 1.1,
      color: "#59BCED",
      translateY: "-1vh",
      easing: "easeInOutQuad",
      duration: 200,
      direction: "alternate",
    });
  }

  private setState(s) {
    this.SHOW_STATE = s;
    if (s == PSTATE.MATCHES) {
      this.present_title = "DEIN ERGEBNIS";
      this.sortMatches();
    } else if (s == PSTATE.SUBS) {
      this.present_title = "DEINE ERSATZBANK";
    } else {
      this.present_title = "DEIN TEAM";
    }
  }

  private sortMatches() {
    this.matches.sort(function (a, b) {
      a.distance = a.distance;
      b.distance = b.distance;
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });
  }

  public tutorialBtnClicked(i) {
    if (i == 0) {
      this.slides.slideNext();
    } else {
      this.NO_TUTORIAL = true;
    }
  }

  public loadMore() {
    this.page = this.page + 1;
    this.loadResults(this.result);
  }

  public showEmailSend() {
    var team = this.matches.slice(0, 20);
    console.log(team);

    this.storage.ready().then(() => {
      this.storage.set("team", JSON.stringify(team));
      this.storage.set("result", JSON.stringify(this.result));
      let navigationExtras: NavigationExtras = {
        queryParams: {
          //team: JSON.stringify(team)
        },
      };
      this.navCtrl.navigateForward(["share"], navigationExtras);
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  errorNum = "";
  ngOnInit(): void {
    this.errorNum=this.route.snapshot.params['type'];
  }
}

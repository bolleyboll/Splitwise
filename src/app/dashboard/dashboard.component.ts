import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Group } from "../model/Group";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  groups: Group[];
  groupsList: String[];
  endtrial: boolean;
  orgname: String;
  vaccname: String;
  result: String;
  starttrial: boolean;
  enroll: boolean;
  vacc: any[];
  constructor(public auth: AuthService) {
    this.groups = [];
    this.groupsList = [];
    this.endtrial = false;
    this.orgname = "";
    this.vaccname = "";
    this.result = "";
    this.starttrial = false;
    this.enroll = false;
  }

  ngOnInit(): void {
    if (this.auth.currentuser.groups === null) {
      this.groupsList = [];
    } else {
      this.auth
        .getGroups(this.auth.currentuser.username)
        .subscribe((res: any) => {
          this.groupsList = res;
          console.log(this.groupsList);
          
          this.groupsList.forEach((group) => {
            this.auth.getGroup(group).subscribe((res: any) => {
              this.groups.push(res);
            });
          });
          console.log(this.groups);
        });

      // this.auth
      //   .getResult(this.auth.currentuser.patientId)
      //   .subscribe((res: any[]) => {
      //     this.result = res[res.length - 1].result;
      //   });
      // this.trial = true;
    }
  }
}

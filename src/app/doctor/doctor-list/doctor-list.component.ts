import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/Doctor/doctor.service';
//import { DoctorService } from 'src/app/doctor/doctor.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[];
  desc: string = '';
  search;
  docList: Doctor[];

  constructor(private router: Router, private ds: DoctorService, private tss: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {

    //this.getdoctors()
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }else{
      this.router.navigate(['login']);
    }
  }
  // private getdoctors(){
  //   this.ds.getDoctorList().subscribe(data => {
  //     this.doctors = data;
  //   });
  // }

  getList() {
    this.ds.getAllDoctor().subscribe((list) => {
      this.docList = list;
    },
      error => {
        console.log(error);
      });

  }
  gotoDoctor() {
    this.router.navigate(['doctor']);
  }
  getDoctor(id: number) {
    this.router.navigate(['doctorUpdate', id]);
  }

  deleteDoctor(id: number) {
    this.ds.deleteDoctor(id).subscribe((response) => {
      console.log(response);
      alert('Doctor deleted');
      this.getList();
    },
      error => {
        console.log(error);
      });

  }

}

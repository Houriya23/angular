import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeComponent } from './employee/employee.component';

import { MedicosComponent } from './medicos/medicos.component';
import { OperationComponent } from './operation/operation.component';
import { PatientComponent } from './patient/patient.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { TestComponent } from './test/test.component';

import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { MedicosListComponent } from './Medicos/medicos-list/medicos-list.component';
import { MedicosDetailsComponent } from './Medicos/medicos-details/medicos-details.component';
import { OperationListComponent } from './Operation/operation-list/operation-list.component';
import { OperationDetailsComponent } from './Operation/operation-details/operation-details.component';
import { PatientListComponent } from './Patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './Patient/patient-details/patient-details.component';
import { SpecializationListComponent } from './specialization/specialization-list/specialization-list.component';
import { SpecializationDetailsComponent } from './specialization/specialization-details/specialization-details.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { TestDetailsComponent } from './test/test-details/test-details.component';

import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { SpecializationPipe } from './filter/specialization/specialization.pipe';
import { WardPipe } from './filter/Ward/ward.pipe';
import { TestPipe } from './filter/test/test.pipe';

import { PatientPipe } from './filter/patient/patient.pipe';
import { OperationPipe } from './filter/operation/operation.pipe';
import { InsurancePipe } from './filter/insurance/insurance.pipe';

import { DoctorPipe } from './filter/doctor/doctor.pipe';
import { EmployeePipe } from './filter/employee/employee.pipe';
import { MedicosPipe } from './filter/medicos/medicos.pipe';
import { HomeComponent } from './menu/home/home/home.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { ContactUsComponent } from './menu/contact-us/contact-us.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,

    DoctorComponent,
    EmployeeComponent,
    MedicosComponent,
    OperationComponent,
    PatientComponent,
    SpecializationComponent,
    TestComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    MedicosListComponent,
    MedicosDetailsComponent,
    OperationListComponent,
    OperationDetailsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    SpecializationListComponent,
    SpecializationDetailsComponent,
    TestListComponent,
    TestDetailsComponent,

    DoctorListComponent,
    DoctorDetailsComponent,

    SpecializationPipe,

    TestPipe,

    PatientPipe,
    OperationPipe,
    InsurancePipe,

    DoctorPipe,
    EmployeePipe,
    MedicosPipe,
    HomeComponent,
    LoginComponent,
    IndexComponent,
    SignUpComponent,
    AboutUsComponent,
    ContactUsComponent,
    InvoiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent, IndexComponent]
})
export class AppModule { }

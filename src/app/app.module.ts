import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




//VER CuaLES SIVERN
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



//DE NUESTRA APP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';    
import { DetalleLogComponent } from './detalle-log/detalle-log.component';  
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { CarreraComponent } from './admin/carrera/carrera.component';
import { MesasComponent } from './mesas/mesas.component';
import { UserCarrerasComponent } from './user-carreras/user-carreras.component';
import { InscrMateriasComponent } from './inscr-materias/inscr-materias.component';
import { CarreraFormComponent } from './admin/carrera/carrera-form/carrera-form.component';
import { MesaComponent } from './admin/mesa/mesa.component';
import { MesaFormComponent } from './admin/mesa/mesa-form/mesa-form.component';
import { NewLogComponent } from './new-log/new-log.component';
import { UsrCarreraSubsComponent } from './usr-carrera-subs/usr-carrera-subs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,

    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LogsComponent,
    DetalleLogComponent,
    CarreraComponent,
    MesasComponent,
    UserCarrerasComponent,
    InscrMateriasComponent,
    CarreraFormComponent,
    MesaComponent,
    MesaFormComponent,
    NewLogComponent,
    UsrCarreraSubsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
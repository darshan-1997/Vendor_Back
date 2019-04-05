import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
//import {MenuRouting} from './menu/menu-routing.component';
import {AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {dashboard} from './dashboard/dashboard.component';
import {profile} from './Profile/profile.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainNavComponent } from './main-nav/main-nav.component';
import {LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MenuComponent } from './menu/menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersComponent} from './users/users.component';
import {UserService} from './users/users.service';
import {MenuService} from './menu/menu.service';
import {MatTabsModule} from '@angular/material';
import {FileUploadModule} from 'ng2-file-upload';
import {addbulck} from './menu/submenu/addbulk/addbulck.component';
import {addsingle} from './menu/submenu/addsingle/addsingle.component';
import {MatSnackBarModule} from '@angular/material';
import {menudisplay} from './menu/submenu/menudisplay/menudisplay.component';
import {deletemenu} from './menu/submenu/delete/deletemenu.component';
import {MatCheckboxModule} from  '@angular/material';
import {update} from './menu/submenu/update/update.component';
import {MatDialogModule} from '@angular/material';
import {dialogdata} from './menu/submenu/updatedialog/dialog.component';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material';
import {FormControl,FormGroup} from '@angular/forms';
import { AuthGuard } from './login/auth.guard';
import { booker } from './Booker/booker.component';
import { bookerdisplay } from './Booker/subbooker/bookerdisplay/bookerdisplay.component';
import { DeleteBooker } from './Booker/subbooker/bookerdelete/bookerdelete.component';
import { AddBooker } from './Booker/subbooker/bookeradd/bookeradd.component';
import { BookerUpdate } from './Booker/subbooker/bookerupdate/booker.update';
import { dialogdata2 } from './Booker/subbooker/bookerdialog/booker.dialog.component';
import { DisplayFeature } from './Booker/subbooker/featuredisplay/booker.feature.component';
import { FeatureDialog } from './Booker/subbooker/featuredialog/add.feature.dialog';
import { OrderDisplay } from './orders/ordersdisplay/displayall/orders.display.component';
import {OrderService} from './orders/orders.service'
import { KitchenApp } from './kitchen/kitchen.component';
import { OrderMainComponent } from './orders/ordersdisplay/ordermain.component';
import { OrderDisplayBill } from './orders/ordersdisplay/orderbills/orderbil.component';
import { BillDialog } from './orders/ordersdisplay/orderbills/billdialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    dashboard,
    profile,
    MainNavComponent,
    MenuComponent,
    addbulck,
    addsingle,
    menudisplay,
    deletemenu,
    MenuComponent,
    update,
    dialogdata,
    LoginComponent,
    booker,
    bookerdisplay,
    DeleteBooker,
    AddBooker,
    BookerUpdate,
    dialogdata2,
    DisplayFeature,
    FeatureDialog,
    OrderDisplay,
    KitchenApp,
    OrderMainComponent,
    OrderDisplayBill,
    BillDialog
    //DisplayFeature

  ],
  entryComponents:[dialogdata, dialogdata2,FeatureDialog,BillDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // MenuRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    MatTabsModule,
    FileUploadModule,  
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    


    


  ],
  providers: [UserService,MenuService,OrderService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

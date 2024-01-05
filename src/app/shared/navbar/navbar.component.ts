import { Component, OnInit, inject, signal, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

interface MenuItem {
  name : string;
  route: string;
  children?: MenuItem[];
}

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private router  = inject(Router);
  private clickNav: Boolean = false;
  private clickButtonNav: Boolean = false;

  public menuItems = signal<MenuItem[]>([
    { route: '/inicio', name: 'Inicio' },
    { route: '/nosotros', name: 'Nosotros' },
    { route: '/servicios', name: 'Servicios',
      children: [
        {route: '/servicios/inventario', name: 'Inventario'},
        {route: '/servicios/logistica', name: 'Logística'}
      ]
    },
    { route: '/clientes', name: 'Clientes' },
    { route: '/contacto', name: 'Contacto' },
  ]);

  @ViewChildren("navParent") navParent!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.loadActiveGroup();
  }

  private loadActiveGroup(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        let ev = event as NavigationEnd;
        this.menuItems().filter(m => m.children!=null).forEach( ({children, name}) =>{
          children?.forEach(({route}) => {
            if(route === ev.url){
              let navLink = document.getElementById(name) as HTMLAnchorElement;
              navLink.classList.add('active');
            }
          });
        });
        this.restartScroll();
        if(this.clickNav || this.clickButtonNav){
          this.closeMenu();
          this.clickButtonNav = false;
        }
      });
  }

  public activeGroup(id: HTMLAnchorElement){
    this.removeActiveGroup();
    id.classList.add('active');
  }

  public removeActiveGroup(){
    this.navParent.forEach((nav: ElementRef) => nav.nativeElement.classList.remove('active'));
    this.clickNav = true;
  }

  private restartScroll(){
    window.scrollTo(0, 0);
  }

  private closeMenu(){
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click();
    }
  }

  public initialMenu(){
    this.removeActiveGroup();
    this.clickNav = false;
  }

  public openMenu(){
    if(this.clickButtonNav){
      this.clickButtonNav = false;
    } else{
      this.clickButtonNav = true;
    }
  }
}

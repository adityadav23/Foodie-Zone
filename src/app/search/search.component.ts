import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}
  searchItem: string = ''
  ngOnInit(): void {
      this.route.params.subscribe(param=>{
        if(param['searchItem']){
          this.searchItem = param['searchItem']
        }
      })
  }

  search(): void{
    if(this.searchItem){
      this.router.navigate(['search', this.searchItem])
      return;
    }
    // this.router.navigate([])

   }
}

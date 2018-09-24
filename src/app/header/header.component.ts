import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService, private router: Router) {
  }

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  onSaveData() {
    const token = this.authService.getToken();
    this.http.put('https://recipebookandshoppinglistapp.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }

  onFetchData() {
    const token = this.authService.getToken();
    this.http.get('https://recipebookandshoppinglistapp.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        error => console.error(error)
      );
  }

  onLogout() {
    this.authService.signOutUsers();
    this.router.navigate(['/']);
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ModuleRoute } from '../../tokens';

@Component({
  selector: 'app-star-wars-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './star-wars-root.html',
  styleUrl: './star-wars-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
providers: [
{
provide: ModuleRoute,
useFactory: () => inject(ActivatedRoute),
},
],
})
export class StarWarsRoot {

}

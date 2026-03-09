import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ModuleRoute } from '../../tokens';
import { filmResource } from '../../helpers';
import { FilmsView } from '../../components/films-view/films-view';

@Component({
  selector: 'app-film-view-page',
  imports: [FilmsView],
  templateUrl: './film-view-page.html',
  styleUrl: './film-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmViewPage {
  readonly id = input.required<string>();

  protected readonly moduleRoute = inject(ModuleRoute);
  private readonly location = inject(Location);

  readonly dataResource = filmResource(() => this.id());
  protected goBack(): void {
    this.location.back();
  }
}

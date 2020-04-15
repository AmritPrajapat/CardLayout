import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardLayout';

  product = [];
  productOut = [];

constructor()
{
this.product =[
{id:101,company:'Hindustan Unilever',product:'Boost', Description : 'Boost is one of India’s leading malt-based health food drink launched in 1975. It is clinically proven to increase stamina by three times (3X) more. It contains nutrients known to be essential for oxygen utilization of the body and energy metabolism.'},
{id:102,company:'Hindustan Unilever',product:'Cif', Description : 'In more than 50 countries around the world, millions of people use Cif’s range of home care products to clean their kitchens, bathrooms, dishes, floors and surfaces. Cif products come in various forms: creams, sprays, gels, wipes and liquids. The brand is also known as Jif and Viss in different markets.'},
{id:103,company:'Hindustan Unilever',product:'Milk', Description : 'The Cornetto experience consists of a delicious, crispy-baked wafer, coated inside from top to bottom with a chocolate-flavour layer, combined with a delicious ice cream'},
]

}



getInfo(valdata)
{
  this.productOut=this.product.filter(s=>s.product===valdata.product);
}


}




import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  // get the ids of prices
  basic = 'price_1OerANIXxCO91fJ1GG9IEJvj';
  premium = 'price_1Oes02IXxCO91fJ1Kt8eCAg8';

  // load the stripejs
  stripePromise = loadStripe(environment.stripe);

  constructor(private http: HttpClient) { }

  async checkoutBasic(): Promise<void> {
    this.checkout(this.basic);
  }

  async checkoutPremium(): Promise<void> {
    this.checkout(this.premium);
  }

  /**
   * this method do the checkout for a priceId and it is async because it awaiting the Promise object
   */
  private async checkout(priceId: String): Promise<void> {
    const checkout = {
      priceId: priceId,
      cancelUrl: 'http://localhost:4200/canceled',
      successUrl: 'http://localhost:4200/',
    };
    const stripe = await this.stripePromise;
    // this is a normal http calls for a backend api
    if (stripe !== null && stripe !== undefined) {
      this.http
        .post(`${environment.serverUrl}/subscription`, checkout)
        .subscribe((data: any) => {
          // I use stripe to redirect To Checkout page of Stripe platform
          stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });
        },(err : any)=>{

          console.log(err);

        }
        )
        
    }
  }
}
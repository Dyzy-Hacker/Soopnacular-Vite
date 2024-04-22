import React from "react";
import { Link } from "react-router-dom";
import { tiers } from "../constant";

const Pricing = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-cosutm_yellow">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for&nbsp;you
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
            We will provide you a good, our site have any recipe. <br />
            There is Montly plans for you service, <br />
            we have plans for all costumers. <br />
            asd <br />
          </p>
          <div className="mt-20 flow-root">
            <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
              {tiers.map((tier) => (
                <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3
                    id={tier.id}
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.price.monthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month <br />
                      /year
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {tier.price.annually} per month if paid annually
                  </p>
                  {/* <Link
                  to={`/pricing/123`}
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-10 block rounded-md bg-cosutm_yellow px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy plan
                  </Link> */}
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-10 block rounded-md bg-cosutm_yellow px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy plan
                  </a>
                  <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <div
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* <div className="yellow__gradient absolute z-[0] w-[40%] h-[35%] top-[70vh] left-[120vh] rounded-full"></div>
              <div className="yellow__gradient absolute z-[0] w-[40%] h-[35%] top-[70vh] left-[1vh] rounded-full"></div>
              <div className="yellow__gradient absolute z-[0] w-[40%] h-[35%] top-[70vh] left-[500px] rounded-full"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

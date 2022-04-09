# Toolbox Checkout

![GitHub last commit](https://img.shields.io/github/last-commit/mikerudge/toolbox-checkout)

![GitHub repo size](https://img.shields.io/github/repo-size/mikerudge/toolbox-checkout)

![GitHub top language](https://img.shields.io/github/languages/top/mikerudge/toolbox-checkout)

Thanks for taking the time to look over my submission for the take home assignment, I hope that this hits the brief and would be happy to discuss the decisions further.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You should now see a simple page with an input. Enter an number between 1-4 to see the corresponding order.

## Notes

### Available Data

- There are 4 demo orders [1 - 4], you can find them in [mockData/orders](mockData/orders.ts)
- There are also 4 demo discount codes, which you can find here [mockData/discountCodes](mockData/discountCodes.ts)
  - 123
  - 234
  - 345
  - 456

### Promo Code Functionality

On the order page you can use on of the promotional codes and you should see the total re calculated with the discount code.

Each promo code has a usage limit, if you use the same code more than the limit, the discount will not be applied.

Each promo code has a type [percentage, fixed], if the type is percentage, the discount will be applied as a percentage of the total.

The data is stored in memory, so restarting the server will reset the data.

## Demo

![App Screenshot](https://i.ibb.co/Qm9997g/2022-04-09-21-40-41.gif)

## Support

For support, email mikerudge@me.com

## Screenshots

![App Screenshot](https://i.ibb.co/DDpXXhs/Screenshot-2022-04-09-at-21-26-28.png)

## Roadmap

- Additional browser support

- Add more integrations

## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Feedback

If you have any feedback, please reach out to us at fake@fake.com

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

## Documentation

[Documentation](https://linktodocumentation)

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

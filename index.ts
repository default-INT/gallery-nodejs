import 'module-alias/register';
import { app } from 'config/app';
import { routes } from './config/routes';

const port = process.env.PORT;

app.use(routes.gallery, (req, res) => res.sendStatus(500));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

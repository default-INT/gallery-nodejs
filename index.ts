import 'module-alias/register';
import { app } from 'config/app';
import { connect } from 'mongoose';
import { routes } from './config/routes';

const port = 3000;

connect(
  'mongodb+srv://admin:18061806@gallery-cluster.9pixq.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('connected'));

app.use(routes.gallery, (req, res) => res.sendStatus(500));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

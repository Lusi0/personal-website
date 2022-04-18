import lodash from 'lodash';
import database from '../../../databases/blog.json';

export default function handler(req, res) {

  res.status(200).json(database)
}
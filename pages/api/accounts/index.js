import lodash from 'lodash';
import database from '../../../databases/accounts.json';

export default function handler(req, res) {

  res.status(200).json(database)
}
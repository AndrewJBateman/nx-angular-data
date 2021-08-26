import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Data } from '@nx-angular-data/api-interfaces';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';

@Injectable()
export class DatasService {

  datas: Data[] = [
    {
      "id": "1",
      "title": "DMDINTA",
      "description": "DEMAND INTERVAL FLAG A"
    },
    {
      "id": "2",
      "title": "TLCPLOT",
      "description": "TC ENERGY PLOT POINT"
    },
    {
      "id": "3",
      "title": "42PH002",
      "description": "PH AGUA SERVICO P/CEMAP"
    },
    {
      "id": "4",
      "title": "170FI28",
      "description": "GN PARA COP599"
    }
  ]

  create(data: Data) {
    this.datas = [...this.datas, Object.assign({}, data, { id: uuidv4()})]
    return
  }

  findAll() {
    return this.datas;
  }

  findOne(id: string) {
    return this.datas.find((data) => data.id === id);
  }

  update(id: string, data: Data) {
    this.datas = this.datas.map((d) => (d.id === id ? data : d));
    return this.datas;
  }

  remove(id: string) {
    this.datas = this.datas.filter((data) => data.id !== id);
    return this.datas;
  }
}

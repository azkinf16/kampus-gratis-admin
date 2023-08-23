import React from 'react';

const table = () => {
  return (
    <div className="shadow-md` p-4">
      <table className="w-full table-auto">
        <tr>
          <th>No</th>
          <th>Nama Mahasiswa</th>
          <th>NIM</th>
          <th>Status KRS</th>
          <th>KRS</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Alfreds Futterkiste</td>
          <td>101001</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Centro comercial Moctezuma</td>
          <td>1101001</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ernst Handel</td>
          <td>100101</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Island Trading</td>
          <td>1010011</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>100101</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Magazzini Alimentari Riuniti</td>
          <td>0101010</td>
          <td>Active</td>
          <td>Lihat KRS</td>
          <td>Centang</td>
        </tr>
      </table>
    </div>
  );
};

export default table;

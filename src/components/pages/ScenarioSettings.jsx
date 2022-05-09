import React, { useState } from "react";
import Button from "../button/Button";
import { plus, trash } from "../../svg/index";
import InputCheckbox from "../form-control/InputCheckbox";
import Modal from "../modal/Modal";
const ScenarioSettings = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const clicked = () => {
    setModalOn(true);
  };
  return (
    <div className="bg-white px-10 ">
      <div className="flex justify-end pt-4 pb-6">
        <Button
          className="bg-bgOrange flex gap-x-2 items-center px-4 py-2 rounded-sm text-white 
        "
          data-modal-toggle="defaultModal"
          onClick={clicked}
        >
          <img src={plus} alt="" className="" />
          新しいシナリオを作成する
        </Button>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                <InputCheckbox></InputCheckbox>
              </th>
              <th scope="col" className="px-2 py-3">
                シナリオ名
              </th>
              <th scope="col" className=" px-2">
                作成者
              </th>
              <th scope="col" className="px-2 py-3">
                作成日
              </th>
              <th scope="col" className="px-2 py-3">
                タグ
              </th>
              <th scope="col" className="px-2 py-3">
                Title
              </th>
              <th scope="col" className="px-2 py-3 text-end">
                <img src={trash} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <td className="px-2 py-4">
                <InputCheckbox />
              </td>

              <td
                scope="row"
                className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-2 py-4">Sliver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
              <td className="px-2 py-4 text-left text-blue-600">Edit</td>
              <td className="px-6 py-4 text-right text-blue-600"></td>
            </tr>
          </tbody>
        </table>
      </div>
      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  );
};

export default ScenarioSettings;

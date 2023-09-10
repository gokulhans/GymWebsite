import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 flex items-start pt-5">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
          <div className="relative bg-white shadow-md dark:bg-gray-800 rounded-t">
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <Link
                  to={"/adduser"}
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Add User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="overflow-x-auto max-w-screen-xl px-4 mx-auto lg:px-12 w-full rounded-b">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-b">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-3">
                Name
              </th>
              <th scope="col" class="px-4 py-3">
                Number
              </th>
              <th scope="col" class="px-4 py-3">
                Date of Joining
              </th>{" "}
              <th scope="col" class="px-4 py-3">
                Height
              </th>{" "}
              <th scope="col" class="px-4 py-3">
                Weight
              </th>
              <th scope="col" class="px-4 py-3">
                Photo
              </th>
              <th scope="col" class="px-4 py-3">
                Payment Status
              </th>{" "}
              <th scope="col" class="px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white shadow-md dark:bg-gray-800 rounded-b">
            <tr class="border-b dark:border-gray-700 ">
              <td class="px-4 py-3">Fadhil P</td>
              <td class="px-4 py-3">9876543210</td>
              <td class="px-4 py-3">January 19</td>
              <td class="px-4 py-3">180</td>
              <td class="px-4 py-3">65</td>
              <td class="px-4 py-3">Photo</td>
              <td class="px-4 py-3">Done</td>
              <td class="px-4 py-3 flex items-center justify-evenly">
                <FontAwesomeIcon
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  icon={faPenToSquare}
                />
                <FontAwesomeIcon
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  icon={faTrash}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;

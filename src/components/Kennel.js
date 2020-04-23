import React from "react"
import "./animal/Animals.css"
import "./location/Locations.css"
import "./customer/Customers.css"
import "./employee/Employees.css"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import "./Kennel.css"


export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
          <LocationProvider>
            <CustomerProvider>
              <AnimalList />
            </CustomerProvider>
          </LocationProvider>
        </AnimalProvider>

        <h2>Locations</h2>
        <LocationProvider>
          <LocationList />
        </LocationProvider>

        <h2>Customer</h2>
        <CustomerProvider>
          <CustomerList />
        </CustomerProvider>

        <h2>Employee</h2>
        <EmployeeProvider>
          <EmployeeList />
        </EmployeeProvider>
    </>
)
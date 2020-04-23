import React from "react"

export default ({ animal, customer, location }) => (
  <section className='animal'>
    <h3 className="animal__name">Name: { animal.name }</h3>
    <p className="animal__breed">Name: { animal.breed }</p>
    <div className="animal__location">Location: { location.name }</div>
    <div className="animal__owner">Customer: { customer.name }</div>
  </section>
)
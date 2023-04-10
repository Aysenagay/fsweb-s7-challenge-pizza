import "./Orderform.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";

const schema = yup.object().shape({
  hamburgerMenuSelection: yup.string().required("Make your choice"),
  name: yup
    .string()
    .required()
    .min(2, "The name must be at least two characters"),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "You must choose one.")
    .required(),
  adress: yup
    .string()
    .required("Enter the address")
    .min(10, "At least 10 characters must be entered"),
  telephone: yup
    .number()
    .typeError("The number must be entered as a number")
    .required("Enter phone number.")
    .min(10, "The phone number must be entered as 10 digits."),
  numberoforders: yup.number().required("Enter order quantity"),

  mushrooms: yup.boolean().oneOf([true, false], ""),
  tomatoes: yup.boolean().oneOf([true, false], ""),
  pepper: yup.boolean().oneOf([true, false], ""),
  cheddar: yup.boolean().oneOf([true, false], ""),
  lettuce: yup.boolean().oneOf([true, false], ""),
  ketchup: yup.boolean().oneOf([true, false], ""),
  mayonnaise: yup.boolean().oneOf([true, false], ""),
  mustard: yup.boolean().oneOf([true, false], ""),
  ordernot: yup.string(),
});

export default function OrderForm() {
  const [form, setForm] = useState({
    hamburgerMenuSelection: "",
    name: "",
    size: "none",
    adress: "",
    telephone: "",
    mushrooms: "",
    tomatoes: "",
    pepper: "",
    cheddar: "",
    lettuce: "",
    ketchup: "",
    mayonnaise: "",
    mustard: "",
    ordernot: "",
    numberoforders: "",
  });
  const [errors, setErrors] = useState({
    hamburgerMenuSelection: "",
    name: "",
    size: "none",
    adress: "",
    telephone: "",
    mushrooms: "",
    tomatoes: "",
    pepper: "",
    cheddar: "",
    lettuce: "",
    ketchup: "",
    mayonnaise: "",
    mustard: "",
    ordernot: "",
    numberoforders: "",
  });
  const [buttonDisabledMı, setbuttonDisabledMı] = useState(true);
  const [newOrder, setnewOrder] = useState(null);

  useEffect(() => {
    schema.isValid(form).then((valid) => setbuttonDisabledMı(!valid));
  }, [form]);
  function handleChange(event) {
    const { name, value } = event.target;
    formControl(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }
  function formControl(name, value) {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  function handleSubmit(event) {
    event.PreventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log(response.data);
        setnewOrder(response.data);
        setForm({
          hamburgerMenuSelection: "",
          name: "",
          size: "none",
          adress: "",
          telephone: "",
          mushrooms: "false",
          tomatoes: "false",
          pepper: "false",
          cheddar: "false",
          lettuce: "false",
          ketchup: "false",
          mayonnaise: "false",
          mustard: "false",
          ordernot: "",
          numberoforders: "",
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="ordercontainer">
      <form onSubmit={handleSubmit}>
        <div className="hamburgerselection">
          <h3>Choose type of hamburger.</h3>
          <select
            name="hamburgerselection"
            value={form.hamburgerselection}
            onChange={handleChange}
          >
            <option value="">Choose type of hamburger.</option>
            <option value="chickenburger">Chicken Burger</option>
            <option value="doubleburger">Double Burger </option>
            <option value="cheeseburger">Cheese Burger</option>
            <option value="specialburger">Special Burger</option>
          </select>
          {errors.hamburgerselection && <p>{errors.hamburgerselection}</p>}
        </div>
        <div className="menuselection">
          <h3>Select menu size.</h3>
          <input
            type="radio"
            value="Small"
            name="size"
            checked={form.size === "Small"}
            onChange={handleChange}
          />{" "}
          Small
          <input
            type="radio"
            value="Medium"
            name="size"
            checked={form.size === "Medium"}
            onChange={handleChange}
          />{" "}
          Medium
          <input
            type="radio"
            value="Large"
            name="size"
            checked={form.size === "Large"}
            onChange={handleChange}
          />{" "}
          Large
          {errors.menuselection && <p>{errors.menuselection}</p>}
        </div>
        <div className="hamburgerstuff">
          <h3>choose extra material.</h3>
          <label>
            <input
              type="checkbox"
              name="Mushrooms"
              id="Mushrooms"
              value={form.Mushrooms}
              onChange={handleChange}
            />
            Mushrooms
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Tomatoes"
              id="Tomatoes"
              value={form.Tomatoes}
              onChange={handleChange}
            />
            Tomatoes
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Pepper"
              id="Pepper"
              value={form.Pepper}
              onChange={handleChange}
            />
            Pepper
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Cheddar"
              id="Cheddar"
              value={form.Cheddar}
              onChange={handleChange}
            />
            Cheddar
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Lettuce"
              id="Lettuce"
              value={form.Lettuce}
              onChange={handleChange}
            />
            Lettuce
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Ketchup"
              id="Ketchup"
              value={form.Ketchup}
              onChange={handleChange}
            />
            Ketchup
            <label>
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                name="Mayonnaise"
                id="Mayonnaise"
                value={form.Mayonnaise}
                onChange={handleChange}
              />
              Mayonnaise
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Mustard"
                id="Mustard"
                value={form.Mustard}
                onChange={handleChange}
              />
              Mustard
            </label>
            <br />
          </label>
        </div>
        <div className="name">
          <h3>Contact Information</h3>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="adress">
          <label>
            Adress:
            <input
              type="text"
              name="adress"
              value={form.adress}
              onChange={handleChange}
            />
          </label>
          {errors.adress && <p>{errors.adress}</p>}
        </div>
        <div className="telephone">
          <label>
            Telephone:
            <input
              type="text"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
            />
          </label>
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>

        <div className="ordernot">
          <h3>Order Not:</h3>
          <br />
          <label>
            <input
              type="text"
              name="ordernot"
              value={form.ordernot}
              onChange={handleChange}
            />
          </label>
          {errors.ordernot && <p>{errors.ordernot}</p>}
        </div>
        <div className="numberoforders">
          <h3>Number of Orders:</h3>
          <label>
            <input
              type="number"
              name="numberoforders"
              value={form.numberoforders}
              min="1"
              onChange={handleChange}
            />
          </label>
          {errors.numberoforders && <p>{errors.numberoforders}</p>}
        </div>
        <input
          type="submit"
          name="button"
          disabled={buttonDisabledMı}
          value="Send Order"
        />
        {newOrder && (
          <p className="confirmation">Your order has been Confirmed</p>
        )}
      </form>
    </div>
  );
}

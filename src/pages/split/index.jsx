import Card from "@/utils/components/Card";
import React from "react";

const expense = [
  {
    name: "Milk",
    price: 700,
    currency: "₹",
    included: [
      { name: "user 1", price: 350, spent: false, settled: false },
      { name: "user 2", price: 350, spent: true, settled: true },
    ],
  },
  { name: "Products", price: 980, currency: "₹", included: ["abc"] },
  { name: "Regular expense", currency: "₹", price: 950, included: ["abc"] },
  { name: "normal expense", currency: "₹", price: 10, included: ["abc"] },
];

const Index = () => {
  return (
    <div>
      <div>
        <button>Add expense</button>
      </div>
      <div>
        {expense.map((expense, index) => {
          return (
            <Card key={index}>
              <div>{expense.name}</div>
              <div>
                {expense.currency}
                {expense.price}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

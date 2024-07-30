// components/PollCard.js

import Card from "@/utils/components/Card";
import React from "react";
import { Button, Checkbox, LinearProgress } from "@mui/material";

const polls = [
  {
    name: "poll 1",
    creator: "abc",
    dateCreated: "",
    multipleOptions: true,
    options: [
      { name: "yes", votes: ["kdf", "fdkf", "fdfkjk"] },
      { name: "no", votes: ["abc", "use"] },
    ],
  },
  {
    name: "poll 2",
    creator: "def",
    dateCreated: "98989",
    multipleOptions: false,
    options: [
      { name: "yes", votes: ["kdf", "fdfkjk"] },
      { name: "no", votes: ["abc", "use"] },
    ],
  },
  {
    name: "poll 3",
    creator: "def",
    dateCreated: "98989",
    description: "this is second poll",
    multipleOptions: false,
    options: [
      { name: "yes", votes: ["kdf", "fdfkjk"] },
      { name: "no", votes: ["abc", "use"] },
    ],
  },
];

const PollCard = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex justify-center">
        <Button variant="contained" color="primary">
          Create Poll
        </Button>
      </div>
      <div className="space-y-6">
        {polls.map((poll, i) => {
          const members = 10;
          return (
            <Card
              key={i}
              className="p-6 shadow-lg rounded-lg"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold">{poll.name}</h2>
                <p className="text-sm">{poll.dateCreated}</p>
              </div>
              <div className="space-y-4">
                {poll.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="w-16 text-center">{option.name}</span>
                    <LinearProgress
                      value={(option.votes.length / members) * 100}
                      aria-labelledby="continuous-slider"
                      className="flex-grow"
                      variant="determinate"
                    />
                    <div>{(option.votes.length / members) * 100}%</div>
                    <Checkbox />
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PollCard;

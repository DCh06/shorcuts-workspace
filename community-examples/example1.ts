import { test1 } from "../utils/utils1";
import { test2 } from "../utils/utils2";

interface IMyAwesomeInterface {
  alpha: string;
  beta: string;
}

function letMeShowYou(): void {
  // select word + select next
  // duplicate row
  // multiple coursors
  const variabled: IMyAwesomeInterface = "y";
  const variableBETAGAMA: IMyAwesomeInterface = "y";
  const variableA: IMyAwesomeInterface = "y";
  const variableC: IMyAwesomeInterface = "y";
  const variableE: IMyAwesomeInterface = "y";
  // last visited file

  const x = test1();

  // smart selection expand/shrink use case 1
  const brainFk = (awesome: IMyAwesomeInterface) => {
    const brainFk2 = (awesome1: IMyAwesomeInterface) => ({
      if(variableD) {
        console.log(variableD);

        brainFk2(awesome1);
        if (brainFk2) {
          if (!awesome1) {
            return "d";
          }
          ["a", "b", "c"].filter(({letter}: any) => {
            if (letter === "a") {
              return true;
            }
          })}}});
  };

  // smart selection expand/shrink use case 2 + select all occurences
  const longJsonArr = [
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside 1",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside 2",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: [
            {
              i: "i wanted prop 3 to be outside3 ",
            },
            {
              i: "i wanted prop 3 to be outside3 ",
            },
          ],
          prop4: "test",
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside4 ",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside5",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside6",
          },
        },
      },
    },
    {
      prop1: {
        prop2: 1,
        innerProp: {
          prop3: {
            i: "i wanted prop 3 to be outside7",
          },
        },
      },
    },
  ];

  // @
  function lastFunction() {
    console.log("hello");
  }
}

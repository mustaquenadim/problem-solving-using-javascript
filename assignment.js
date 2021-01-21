// github repository link

// kilometerToMeter function
function kilometerToMeter (km)
{
    if (km > 0)
    {
        var result = km * 1000;
        return result;
    }
    else
    {
        console.log("Please enter a positive number!");
    }
}

// budgetCalculator function
// watch 50
// mobile 100
// laptop 500
function budgetCalculator (numOfWatch, numOfPhone, numOfLaptop)
{
    if ((numOfWatch > 0) && (numOfPhone > 0) && (numOfLaptop > 0))
    {
        var total = (numOfWatch * 50) + (numOfPhone * 100) + (numOfLaptop * 500)
        return total;
    }
    else
    {
        console.log("Please enter a positive number!");
    }
}

// hotelCost function
// less than 10 -> 100
// 11-20 -> 80
// more than 20 -> 50
function hotelCost (numOfDays)
{
    if (numOfDays <= 10)
    {
        var totalCost = numOfDays * 100;
        return totalCost;
    }
    else if ((numOfDays > 10) && (numOfDays <= 20))
    {
        var cost1 = 10 * 100;
        var daysLeft = numOfDays - 10;
        var cost2 = daysLeft * 80;
        var totalCost = cost1 + cost2;
        return totalCost;
    }
    else if (numOfDays > 20)
    {
        var cost1 = 10 * 100;
        var cost2 = 10 * 80;
        var daysLeft = numOfDays - 20;
        var cost3 = daysLeft * 50;
        var totalCost = cost1 + cost2 + cost3;
        return totalCost;
    }
    else
    {
        console.log("Please enter a positive number!");
    }
}

// megaFriend function
function megaFriend (arrayOfNames)
{
    if (arrayOfNames.length > 0)
    {
        var megaName = arrayOfNames[0];
        for (var i = 0; i < arrayOfNames.length; i++)
        {
            if (megaName.length < arrayOfNames[i].length)
            {
                megaName = arrayOfNames[i];
            }
        }
        return megaName;
    }
    else
    {
        console.log("Please enter an array of multiple string!");
    }
}
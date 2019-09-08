
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street ) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs(street1 - street2) *264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distanceTravelledInFeet(start, destination) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
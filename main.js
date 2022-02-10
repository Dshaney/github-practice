import got from "got";
import input from "input";

async function github(username) {
  const resp = got(`http://api.github.com/users/${username}/repos`);
  const data = await resp.json();
  return data;
}

function display(projects) {
  const sorted = projects.sort((projectA, projectB) => {
    const a = projectA.stargazer_count;
    const b = projectB.stargazer_count;
    if (a > b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a > b) {
      return 0;
    }
  });
  for (let project of sorted) {
    console.log(
    `(${project.stargazers_count} ) ${project.name}: ${project.description}`
    );
  }
}
function main() {
  const resp = await input.text("What is your user name?");
  const respo = await github(resp);
  display(respo);
}

main();

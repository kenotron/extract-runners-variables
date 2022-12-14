const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.info(`Extracting runners variables`);

    const variables = {};

    for (const key of Object.keys(process.env)) {
      if (key.toLowerCase().startsWith("actions_")) {
        variables[key] = process.env[key];
      }
    }

    core.info(JSON.stringify(variables));

    core.setOutput('actions_cache_url', variables['ACTIONS_CACHE_URL']);
    core.setOutput('actions_runtime_token', variables['ACTIONS_RUNTIME_TOKEN']);
    core.setOutput('actions_runtime_url', variables['ACTIONS_RUNTIME_URL']);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

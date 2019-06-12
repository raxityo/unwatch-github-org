# Unwatch Github Organization

Unwatch all repositories form a GitHub organization.

Follow these steps after cloning the repository:
1. ```
    $ npm install && cp secret.sample.json secret.json
    ```
1. Create a new Personal Access Token with at least `repo` and `user` scopes. https://github.com/settings/tokens/new
1. Update `secret.json` with your personal access token.
1. Run the script:
    ```
    $ node index.js
    ```
1. Let it do its job. 🎉


## Author:
Raxit Majithiya [@raxityo](https://twitter.com/raxityo).

## License:
WTFPL - http://www.wtfpl.net/
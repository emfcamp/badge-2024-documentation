# Tildagon Badge Documentation

This is the source for the [Tildagon Badge Documentation](https://tildagon.badge.emfcamp.org/).
Contributions are welcome!

## Testing the documentation on your computer

### Project Setup

Run these commands to set up a Python virtual environment and install the required packages for the project in the project folder:

```sh
pip install pipenv
pipenv install
```

You only need to run this command once.
To activate the virtual environment, run:

```sh
pipenv shell
```

If you open a new terminal window, navigate back to the project folder and activate the virtual environment again.

### Serve the docs locally

To serve the docs locally on your machine, run the following command:

```sh
mkdocs serve
```

### Generate HTML docs

To generate the full HTML version of the docs run:

```sh
make build-prod
```

You can serve the resulting docs with:

```sh
python3 -m http.server 9000 --directory public
```

## Contribute to the documentation

Want to improve our documentation? Please do! You can [open a PR](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop) and we'll take a look.
# Sir Trevor Drupal

A module to integrate Sir Trevor Js with Drupal 7.

## Requirements

- Drupal 7.
- - underscore
- - imce
- - jquery_update
- - tweet_fetch_json

- Sir Trevor Js (included)
- Eventable (included)

## Installation

Install this module along with other modules to sites/all/modules

If you don't have underscore.js you'll need to install with drush or copy to sites/all/libraries/underscore

Include the Sir Trevor Js filter in your Text formats.
You'll want to customise the order of filters so that unwanted tags are stripped and urls / linebreaks are not converted.

## TODO

Allow customisation of textareas that are replaced with Sir Trevor Js.
Migrate existing content to Sir Trevor JSON.
Make installation of content filter simpler.
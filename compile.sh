#!/usr/bin/env bash
cd AlexaSaisNo
printf "Compiling..\n"
zip -r AlexaSaisNo.zip ./*
printf "\n\nStarting upload..\n\n"
aws lambda update-function-code --function-name AlexaSaisNo --zip-file fileb://./AlexaSaisNo.zip
printf "\nCleaning up.."
rm AlexaSaisNo.zip
printf "\n..Done"
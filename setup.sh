read -p "Enter the year: " year 

read -p "Enter the day: " day 

if [ $year -eq $(date +%Y) ]; then
    mkdir $day
    cp template/* $day
    cd $day
    exit
fi

mkdir $year/$day
cp template/* $year/$day
cd $year/$day



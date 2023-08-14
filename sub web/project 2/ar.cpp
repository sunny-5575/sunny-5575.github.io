#include<iostream>
using namespace std;
#define yes cout<<"YES"<<endl;
#define no cout<<"NO"<<endl;

int main() {
      int t;
      cin >> t;
      while(t--)
      {
        int n;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];   
        }
        int a[n];
        if(arr[0]==0){
            a[0]=1;
        }else
        {
            a[0]=0;
        }
        for(int i=0;i<n-1;i++)
        {
            if(a[i]==0)
            {
                a[i+1]=1;
            }else{
               a[i+1]=0; 
            }
        }
        for(int i=0;i<n;i++)
        {
            cout<<a[i]<<" ";
        }
        cout<<endl;
      }
	return 0;
}
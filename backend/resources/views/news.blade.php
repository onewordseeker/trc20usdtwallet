@extends('layouts.app')
    @section('content')
      
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">SPK News</h1>
                    <p class="mb-4">Below are the News Articles.</p>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">News list</h6>
                            <a href="add-news" class="btn btn-primary"><i class="fa fa-plus"></i>Add News</a>
                        </div>
                        <div class="card-body">
                          <div class="text-center">
                             @if(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @elseif(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @endif
                        </div>
                          <div class="col-md-12 row">
                            @foreach($news as $item)
                          	<div class="col-md-4 d-flex pr-3 mb-3" style="padding-left: 0px; padding-right: 0px; background: #f6f6f6; border-radius: 10px">
                             <a href="/edit-news/{{ $item->id }}" style="text-decoration: none">
                              <img style="width: 100%; border-top-right-radius: 10px; border-top-left-radius: 10px" src="{{ $item->image }}"/>
                              <div style="padding: 10px">
                                <h6 style="margin-top: 10px"> {{ $item->title }} </h6>
                                <p style="font-size: 11px">{{ date('d M Y h:i', strtotime($item->created_at)) }}</p>
                                <p>{{ substr($item->description, 0, 100)}} ... </p>
                              </div>
                            </a>
                          	</div>
                           @endforeach
                          </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->
                
    <!-- Logout Modal-->
    <div class="modal fade" id="banUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to block user?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">You are blocking this user, this user will not be able to perform any action on SPK Wallet app after blocked.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" id="blockBTN" href="#">Confirm</a>
                </div>
            </div>
        </div>
    </div>

               
    <!-- Logout Modal-->
    <div class="modal fade" id="activateUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to activate user?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">You are activating this user, this user will be able to perform all actions on SPK Wallet app after importing key phrase again.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" id="activateBTN" href="#">Confirm</a>
                </div>
            </div>
        </div>
    </div>

  @endsection